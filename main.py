import webview
import sys
import getopt
import asyncio
import psutil
import subprocess
import re
import time


def main():
    is_dev = get_is_dev()
    if is_dev:
        url, pid = start_window_dev()
        webview.create_window('Woah dude!', url=url, frameless=True)
        webview.start()
    else:
        pass


def get_is_dev():
    argv = sys.argv
    try:
        opts, args = getopt.getopt(argv[1:], "DP", longopts=["development", "production"])
        print(opts)
        for opt, arg in opts:
            if opt in ('-dev', '--development'):
                print(f'is dev')
                return True
            else:
                return False
    except getopt.GetoptError as e:
        print(str(e))


def kill(proc_pid):
    process = psutil.Process(proc_pid)
    for proc in process.children(recursive=True):
        proc.kill()
    process.kill()


def start_window_dev():
    rules = r"http:\/\/127\.0\.0\.1:\d+\/"
    line_str = ''
    runlog = subprocess.Popen("cd frontend && yarn dev", shell=True, stdout=subprocess.PIPE,
                              stderr=subprocess.STDOUT)
    for line in iter(runlog.stdout.readline, b''):
        line_str = line.decode('utf-8')
        if 'Local' in line_str:
            print(line_str)
            break
    print('for 循环结束')
    url = re.findall(rules, line_str.replace("\x1b[1m", '').replace("\x1b[22m", ''))[0]

    return url, runlog.pid


def start_window_pro():
    pass


if __name__ == '__main__':
    main()

import cx_Freeze

executables = [cx_Freeze.Executable("main.py")]

cx_Freeze.setup(
    name="PkgTest",
    options={"build_exe": {"packages":[]}},
    executables=executables
)
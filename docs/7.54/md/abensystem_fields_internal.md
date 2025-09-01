  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Built-In Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_objects.htm) →  [ABAP System Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm) → 

Internal System Fields

Internal [system fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") are intended solely for internal use within the ABAP runtime environment and in the kernel. They must never be overwritten from within an ABAP program and they cannot even be accessed in read-only mode.

Name

Type

Length

Content

sy-cfwae

c

5

Not documented

sy-chwae

c

5

Not documented

sy-debug

c

1

Not documented

sy-dsnam

c

8

Name of the spool file

sy-entry

c

72

Not documented

sy-ffile

c

8

Not documented (flatfile)

sy-fleng

i

\-

Length of a data object

sy-fodec

i

\-

Decimal places in a data object

sy-folen

i

\-

Output length of a data object

sy-ftype

c

1

Data type of a data object

sy-group

c

1

Bundling

sy-input

c

1

Not documented

sy-lpass

c

4

Not documented

sy-newpa

c

1

Not documented

sy-nrpag

c

1

Not documented

sy-oncom

c

1

"On Commit" flag. This system field is set to different values depending on the call status of the ABAP program. Among these, only the meaning of the value 'P' is guaranteed . If queried at all, sy-oncom can only be queried for 'P'. The value 'P' means that the program is already executing a subroutine registered using PERFORM ... ON COMMIT and a further subroutine call using PERFORM ... ON COMMIT produces a runtime error.

sy-pauth

n

2

Not documented

sy-playo

c

5

Not documented

sy-playp

c

1

Not documented

sy-pnwpa

c

1

Not documented

sy-pri40

c

1

Not documented

sy-prini

n

1

Not documented

sy-prlog

c

1

Not documented

sy-repi2

c

40

Not documented

sy-rstrt

c

1

Not documented

sy-sfoff

i

\-

Not documented

sy-subcs

c

1

Call status of an executable program

sy-subty

x

1

Call method of an executable program

sy-tabid

c

8

Not documented

sy-tlopc

i

\-

Not documented

sy-tstis

i

\-

Not documented

sy-xcode

c

70

Extended function code. Is filled like sy-ucomm when user actions are performed on lists. Before the length of sy-ucomm was extended from four to 70 characters, sy-xcode was used internally to analyze longer input in the command field of the system toolbar of the list. sy-ucomm should be used in application programs.

sy-xform

c

30

SYSTEM-EXIT subroutine

sy-xprog

c

40

SYSTEM-EXIT program
---
title: "Internal System Fields"
description: |
  Internal system fields(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm 'Glossary Entry') are intended purely for internal use in the ABAP runtime framework and in the kernel. They must never be overwritten in an ABAP program and they should not be accessed in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields_internal.htm"
abapFile: "abensystem_fields_internal.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abensystem", "fields", "internal"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in.htm) →  [Built-In Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_objects.htm) →  [ABAP System Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal System Fields, ABENSYSTEM_FIELDS_INTERNAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Internal System Fields

Internal [system fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") are intended purely for internal use in the ABAP runtime framework and in the kernel. They must never be overwritten in an ABAP program and they should not be accessed in read-only mode.

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

"On Commit" flag. This system field is set to different values depending on the call status of the ABAP program. Only the meaning of the value 'P' is guaranteed. For this reason, sy-oncom can only be queried if even at all for 'P'. The value 'P' means that the program is already running during the execution of a subroutine using PERFORM ... ON COMMIT and another subroutine call using PERFORM ... ON COMMIT causes a runtime error.

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

Extended function code. When user actions are performed on lists, filled like sy-ucomm. Before the length of sy-ucomm was extended from four to 70 characters, sy-xcode was used internally to evaluate longer input in the command field of the system toolbar of the list. sy-ucomm should be used in application programs.

sy-xform

c

30

SYSTEM-EXIT subroutine

sy-xprog

c

40

SYSTEM-EXIT program
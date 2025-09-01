---
title: "RECEIVE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive.htm) Syntax RECEIVE RESULTS FROM FUNCTION func KEEPING TASK IMPORTING p1 = a1 p2 = a2 ... TABLES t1 = itab1 t2 = itab2 ... EXCEPTIONS exc1 = n1 exc2 = n2 ... system_failur
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive_shortref.htm"
abapFile: "abapreceive_shortref.htm"
keywords: ["do", "if", "try", "class", "internal-table", "abapreceive", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RECEIVE%2C%20ABAPRECEIVE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RECEIVE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive.htm)

Syntax

RECEIVE RESULTS FROM FUNCTION func
                *\[*KEEPING TASK*\]*
                *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*
                *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                            *\[*system\_failure = ns *\[*MESSAGE smess*\]**\]*
                            *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                            *\[*OTHERS = n\_others*\]**\]*.

Effect

Is sent, in a callback routine, the results of an [asynchronous RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry").

Additions   

-   [KEEPING TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive.htm)
    Prevents the RFC connection from being disconnected after results have been inherited.
-   [IMPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive_para.htm)
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...
-   [TABLES  t1 = itab1 t2 = itab2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive_para.htm)
    Assigns internal tables itab1, itab2, ... to table parameters t1, t2 (...and so on).
-   [EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreceive_para.htm)
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    system\_failure, communication\_failure (handles special exceptions in RFC including inheritance of the first line of the short dump after smess or cmess)
    OTHERS = n\_others (assigns a number n\_others for the return code sy-subrc to all exceptions not named explicitly)
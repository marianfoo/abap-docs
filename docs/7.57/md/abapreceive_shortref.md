  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RECEIVE, ABAPRECEIVE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

RECEIVE - Short Reference

[Reference](javascript:call_link\('abapreceive.htm'\))

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

Is sent, in a callback routine, the results of an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry").

Additions   

-   [KEEPING TASK](javascript:call_link\('abapreceive.htm'\))
    Prevents the RFC connection from being disconnected after results have been inherited.
-   [IMPORTING  p1 = a1 p2 = a2 ...](javascript:call_link\('abapreceive_para.htm'\))
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...
-   [TABLES  t1 = itab1 t2 = itab2 ...](javascript:call_link\('abapreceive_para.htm'\))
    Assigns internal tables itab1, itab2, ... to table parameters t1, t2 (...and so on).
-   [EXCEPTIONS](javascript:call_link\('abapreceive_para.htm'\))
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    system\_failure, communication\_failure (handles special exceptions in RFC including inheritance of the first line of the short dump after smess or cmess)
    OTHERS = n\_others (assigns a number n\_others for the return code sy-subrc to all exceptions not named explicitly)
  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

RECEIVE - Quick reference

[Reference](javascript:call_link\('abapreceive.htm'\))

Syntax

RECEIVE RESULTS FROM FUNCTION func
                *\[*KEEPING TASK*\]*
                *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*
                *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                            *\[*system\_failure = ns *\[*MESSAGE smess*\]**\]*
                            *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                            *\[*OTHERS = n\_others*\]**\]*  .

Effect

Receives, in a callback routine, the results of an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry").

Additions

-   [KEEPING TASK](javascript:call_link\('abapreceive.htm'\))
    Prevents the RFC connection from being disconnected after results have been inherited.
    
-   [IMPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapreceive_para.htm'\))
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
    
-   [TABLES t1 = itab1 t2 = itab2 ...](javascript:call_link\('abapreceive_para.htm'\))
    Assigns internal tables itab1, itab2, ... to table parameters t1, t2, etc.
    
-   [EXCEPTIONS](javascript:call_link\('abapreceive_para.htm'\))
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    system\_failure, communication\_failure - Handling of special exceptions in RFC including inheritance of the first line of the short dump after smess or cmess.
    OTHERS = n\_others - Assigns a number n\_others for the return value sy-subrc to all exceptions not named explicitly.
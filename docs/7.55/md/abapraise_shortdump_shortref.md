  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

RAISE SHORTDUMP - Quick reference

[Reference](javascript:call_link\('abapraise_shortdump.htm'\))

Syntax

RAISE SHORTDUMP
  *{* *{* TYPE cx\_class *\[*MESSAGE tn(id)
                           *|* *{* ID mid TYPE mtype NUMBER num *}*
                             *\[*WITH dobj1 ... dobj4*\]**\]*
                    *\[*EXPORTING p1 = a1 p2 = a2 ...*\]* *}*
  *|* oref *}*.

Effect

Raises a runtime error with an exception object.

Additions

-   TYPE cx\_class *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
    Specifies the exception class of the exception object.
    

-   [MESSAGE](javascript:call_link\('abapraise_shortdump_message.htm'\))
    Passes the specification of a message to the exception object.
    

-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameters p1, p2, ... of the instance constructor of the exception object.
    

-   oref
    Uses an existing exception object, pointed to by oref.
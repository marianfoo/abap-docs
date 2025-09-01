  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

meth( ... ) - Quick reference

[Reference](javascript:call_link\('abapcall_method_static_short.htm'\))

Syntax

*{*meth
*|*oref->meth
*|*super->meth
*|*class=>meth*}*( *{* *}*
             *|* *{* a *}*
             *|* *{* p1 = a1 p2 = a2 ... *}*
             *|* *{* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
                 *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                 *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
                 *\[*RECEIVING r  = a *\]*
                 *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                             *\[*OTHERS = n\_others*\]**\]* *}* ).

Effect

Static method call.

Specify the method:

-   [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) - Method meth of the same class.
    
-   [oref->meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) - [Instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") meth of the object referenced by oref.
    
-   [super->meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) - Method meth with the same name in the direct superclass.
    
-   [class=>meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) - [Static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth of the class class.
    

Specify the parameter:

-   [( )](javascript:call_link\('abapcall_method_static_short.htm'\))
    Calls a method without passing a parameter.
    
-   [(a)](javascript:call_link\('abapcall_method_static_short.htm'\))
    Calls a method while passing a single parameter a.
    
-   [( p1 = a1 p2 = a2 ... )](javascript:call_link\('abapcall_method_static_short.htm'\))
    Calls a method while passing multiple parameters a1, a2, ...
    
-   [EXPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   [IMPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
    
-   [CHANGING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))
    Assigns actual parameters a1, a2, ... to input/output parameters p1, p2, ...
    
-   [RECEIVING r = a](javascript:call_link\('abapcall_method_parameters.htm'\))
    Assigns the return value r to the actual parameter a.
    

Specify the exceptions:

-   [EXCEPTIONS](javascript:call_link\('abapcall_method_parameters.htm'\))
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    OTHERS = n\_others - Assigns a number n\_others for the return code sy-subrc to all exceptions not named explicitly.
    

This translation does not reflect the current version of the documentation.
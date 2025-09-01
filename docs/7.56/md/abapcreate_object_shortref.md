  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CREATE OBJECT - Short Reference

[Reference](javascript:call_link\('abapcreate_object.htm'\))

Syntax

CREATE OBJECT oref *\[*AREA HANDLE handle*\]*
                   *\[* *\[*TYPE class*\]*
                      *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                      *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]* *\]*
                 *|* *\[* TYPE (name)
                     *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                      *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]**}*
                   *|* *{**\[*PARAMETER-TABLE ptab*\]*
                      *\[*EXCEPTION-TABLE etab*\]**}* *\]*.

Effect

Creates an instance of a class and sets the object reference in oref to the object. If the addition TYPE is not specified, oref must be typed with reference to a [concrete](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") class and this class is instantiated.

Additions

-   [AREA HANDLE handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))
    Creates a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry"), where a reference to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") has to be specified in handle.
-   [*{*TYPE class*}**|**{*TYPE (name)*}*](javascript:call_link\('abapcreate_object_explicit.htm'\))
    Statically or dynamically specifies the class of the object that must be more specific than the static type of oref.
-   [EXPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcreate_object_parameters.htm'\))
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ... of the instance constructor.
-   [EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]*](javascript:call_link\('abapcreate_object_parameters.htm'\))
    Assigns return codes to non-class-based exceptions of the instance constructor.
-   [PARAMETER-TABLE ptab](javascript:call_link\('abapcreate_object_para_tables.htm'\))
    Assigns dynamic actual parameters to the formal parameters of the instance constructor using an internal table ptab of type abap\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](javascript:call_link\('abapcreate_object_para_tables.htm'\))
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of type abap\_excpbind\_tab.
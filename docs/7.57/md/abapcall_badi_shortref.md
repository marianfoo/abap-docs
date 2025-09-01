  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL BADI, ABAPCALL_BADI_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

CALL BADI - Short Reference

[Reference](javascript:call_link\('abapcall_badi.htm'\))

Syntax

CALL BADI badi->meth*|*badi->(meth\_name)
          *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
            *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
            *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
            *\[*RECEIVING r  = a *\]*
            *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
            *\[*OTHERS = n\_others*\]**\]**}*
        *|* *{**\[*PARAMETER-TABLE ptab*\]*
            *\[*EXCEPTION-TABLE etab*\]* *}*.

Effect

Calls a [BAdI method](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") specified directly as meth or specified in meth\_name in the [object plug-ins](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry") referenced by the [BAdI object](javascript:call_link\('abenbadi_object_glosry.htm'\) "Glossary Entry") to which the [BAdI reference variable](javascript:call_link\('abenbadi_reference_variable_glosry.htm'\) "Glossary Entry") badi refers.

Additions   

-   EXPORTING p1 = a1 p2 = a2 ...
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   IMPORTING p1 = a1 p2 = a2 ...
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   CHANGING   p1 = a1 p2 = a2 ...
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   RECEIVING r = a
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   EXCEPTIONS
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   PARAMETER-TABLE
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
-   EXCEPTION-TABLE
    See [CALL METHOD](javascript:call_link\('abapcall_method_shortref.htm'\)).
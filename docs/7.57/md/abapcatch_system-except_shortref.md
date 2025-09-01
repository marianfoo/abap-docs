  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CATCH SYSTEM-EXCEPTIONS, ABAPCATCH_SYSTEM-EXCEPT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CATCH SYSTEM-EXCEPTIONS - Short Reference

[Reference](javascript:call_link\('abapcatch_sys.htm'\))

Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Obsolete: Catches [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") in statement\_block statement block. The catchable runtime errors are specified individually or as exception groups exc1, exc2, etc. If one of the specified runtime errors occurs, the number n1, n2, ... is assigned to system field sy-subrc and program execution is continued after ENDCATCH. Using OTHERS all catchable runtime errors are caught.
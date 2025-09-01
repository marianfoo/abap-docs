  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CATCH SYSTEM-EXCEPTIONS - Quick reference

[Reference](javascript:call_link\('abapcatch_sys.htm'\))

Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Obsolete: Catches [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") in statement\_block. The catchable runtime errors are specified individually or as exception groups exc1, exc2, etc. If one of the specified runtime errors occurs, the number n1, n2, ... is assigned to system field sy-subrc and program execution is continued after ENDCATCH. Using OTHERS all catchable runtime errors are caught.
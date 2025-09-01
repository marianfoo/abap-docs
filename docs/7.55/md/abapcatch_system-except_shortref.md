  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CATCH SYSTEM-EXCEPTIONS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_sys.htm)

Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Obsolete: Catches [catchable runtime errors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") in statement\_block statement block. The catchable runtime errors are specified individually or as exception groups exc1, exc2, etc. If one of the specified runtime errors occurs, the number n1, n2, ... is assigned to system field sy-subrc and program execution is continued after ENDCATCH. Using OTHERS all catchable runtime errors are caught.
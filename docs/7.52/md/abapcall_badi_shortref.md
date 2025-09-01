  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  C

CALL BADI - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_badi.htm)

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

Calls a [BAdI method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_method_glosry.htm "Glossary Entry") specified directly as meth or specified in meth\_name in the [object plug-ins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_plugin_glosry.htm "Glossary Entry") referenced by the [BAdI object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_object_glosry.htm "Glossary Entry") to which the [BAdI reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") badi refers.

Additions

-   EXPORTING p1 = a1 p2 = a2 ...
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   IMPORTING p1 = a1 p2 = a2 ...
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   CHANGING p1 = a1 p2 = a2 ...
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   RECEIVING r = a
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   EXCEPTIONS
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   PARAMETER-TABLE
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
    
-   EXCEPTION-TABLE
    See [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm).
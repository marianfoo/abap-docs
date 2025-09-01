  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) → 

Calling Procedures

[Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") can be called both [internally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures_intern.htm) and [externally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures_extern.htm). The following figure shows the most important internal and external calls.

![Figure](abdoc_call_proc.gif)

The statements for calling procedures are as follows:

-   Methods are called using
    [meth( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm)
    [CALL METHOD dynamic\_meth ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_dynamic.htm)

-   Function modules are called using
    [CALL FUNCTION func ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm)

-   For the time being, obsolete subroutines are called using
    [PERFORM subr ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm)

These statements fill the parameter interfaces of the procedures. If the call ends correctly, control is returned to the statement after the call point.

Continue
[Internal Procedure Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures_intern.htm)
[External Procedure Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures_extern.htm)
[Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm)
[CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm)
[PERFORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm)
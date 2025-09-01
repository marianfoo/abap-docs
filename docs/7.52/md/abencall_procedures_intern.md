  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) → 

Internal Procedure Calls

All procedures which are defined in the same ABAP program and are visible from the calling position can be called internally.

-   In every ABAP program, and within a [class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_glosry.htm "Glossary Entry"), the visible [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") of the class or visible methods of other local classes of the same program can be called. The calling of methods is the only procedure call which is recommended for the program modularization.

-   In a [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"), a [function module](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry") which has been made available for external users can also be called internally.

-   In every ABAP program that still contains [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry"), these can also still be called internally. Subroutines are an obsolete form of internal modularization and should be replaced by methods if possible.

The required program is always already loaded for internal calls.

Example

Internal programming call of method meth1 of a local class from the event block START-OF-SELECTION and the call of meth2 from meth1.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth1.
  PRIVATE SECTION.
    METHODS meth2.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    ...
    meth2( ).
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW cls( )->meth1( ).
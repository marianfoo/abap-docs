  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) → 

UNASSIGN

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunassign_shortref.htm)

Syntax

UNASSIGN <fs>.

Effect

This statement initializes the field symbol <fs>. After the statement, the field symbol does not reference a memory area and the [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_assigned.htm) is false.

Notes

-   The statement [CLEAR <fs>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm) does not initialize the field symbol and initializes the memory area that is assigned to the field symbol instead.
    
-   Unlike the initialization of reference variables, the statement UNASSIGN does not affect [Garbage Collector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm "Glossary Entry").
    

Example

A field symbol to which a memory space is assigned is initialized with UNASSIGN.

FIELD-SYMBOLS <fs> TYPE d.
ASSIGN sy-datlo TO <fs>.
IF <fs> IS ASSIGNED.
  cl\_demo\_output=>write( 'assigned' ).
ENDIF.
UNASSIGN <fs>.
IF <fs> IS NOT ASSIGNED.
  cl\_demo\_output=>write( 'unassigned' ).
ENDIF.
cl\_demo\_output=>display( ).
  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) → 

UNASSIGN

[Short Reference](javascript:call_link\('abapunassign_shortref.htm'\))

Syntax

UNASSIGN <fs>.

Effect

This statement initializes the field symbol <fs>. After the statement, the field symbol does not reference a memory area and the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) is false.

Hints

-   The statement [CLEAR <fs>](javascript:call_link\('abapclear.htm'\)) does not initialize the field symbol and the memory area that is assigned to the field symbol instead.

-   Unlike the initialization of reference variables, the statement UNASSIGN does not affect the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry").
    

Example

A field symbol to which a memory area is assigned is initialized with UNASSIGN.

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
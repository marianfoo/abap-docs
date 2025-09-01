  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Read Positions

At a read position, the content of an operand is read but not changed when the statement is executed. Data objects can be specified as follows at read positions:

-   Specification of a [literal](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry").
    

-   Specification of a [data object visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) at this position using the identifier dobj, a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\* if dref is typed completely.
    Here, the identifiers of data objects also include the specification of [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chaining of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object, otherwise an uncatchable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character ID of a text symbol can also be appended to the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), then the content of the corresponding text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is specification of the internal table of a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), where \[\] cannot be appended to the name. When specifying dobj\[\], this guarantees that the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed and no possible [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). If an internal table does not have a header line, its very name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its very name dobj (without \[\]) is interpreted as the header line and not as the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are listed in [internal tables with headers](javascript:call_link\('abenitab_header_line.htm'\)).

-   Specification of a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a character-like or byte-like data object -or a character-like initial part of a structure- by specifying an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

-   At some positions, numeric values must be specified directly as digits. In contrast to [numeric literals](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry"), it is often not possible to specify a plus/minus sign. Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Hints

-   Text symbols cannot be listed at all read positions. For example, they are not allowed for specifying the target of dynamic [executions](javascript:call_link\('abenabap_execution.htm'\)).

-   A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should only be specified as an operand in a read position if its content is not set by the same statement. Otherwise, this can lead to undefined system behavior.

-   The predicate expressions [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) and [IS BOUND](javascript:call_link\('abenlogexp_assigned.htm'\)) can be used to check the usability of field symbols and data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

-   At many read positions, [functions or expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified instead of data objects.

-   [Enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") can be used in all read positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.
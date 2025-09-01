  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Read Positions

At a read position, the content of an operand is only read, and not changed, when the statement is executed. Data objects can be specified as followed at read positions:

-   As a [literal](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry").
    

-   As a [data object visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) in this place using a name dobj, a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>, or a data reference dref->\* dereferenced using the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") \->\* (providing dref is specified in full).
    Here, the names of data objects also include any [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") specified using the following:
    ... text-idf ...,
    Here, idf is the three-character ID of the text symbol or chainings of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object. Otherwise an unhandleable exception is raised. As an alternative to specifying a text symbol using text-idf, the three-character code of a text symbol can be appended to the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") in parentheses:
    ... '...'(idf) ...
    If the text symbol exists in the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), the content of the text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions dobj\[\], <fs>\[\], or dref->\*\[\] can also be used. An exception to this is when specifying the internal table of a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), where \[\] cannot be appended to the name. In the case of dobj\[\], this ensures that the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed and no [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). If an internal table does not have a header line, its simple name dobj (without \[\]) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its simple name dobj (without \[\]) is interpreted as the header line and not the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are specified under [internal tables with headers](javascript:call_link\('abenitab_header_line.htm'\)).

-   As a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a character-like or byte-like data object (or a character-like initial part of a structure) by specifying an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

-   In some positions, number values must be specified directly as digits, although it is often not possible to specify a sign (which is not the case with [numeric literals](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry")). Examples are numbers specified in declarative statements for the length of elementary data objects or for the initial memory requirements of internal tables.

Notes

-   Text symbols cannot be listed at all read positions. For example, they are not permitted for specifying the target of dynamic [executions](javascript:call_link\('abenabap_execution.htm'\)).

-   A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should only be specified as an operand in a reading position if its content is not set by the same statement, since otherwise undefined behavior may occur.

-   The predicate expressions [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) and [IS BOUND](javascript:call_link\('abenlogexp_assigned.htm'\)) can be used to check whether field symbols or data references.

-   A data reference variable with a generic static type can only be deserialized using the statement [ASSIGN dref->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

-   In many reading positions, [functions or expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified as well as data objects.

-   [Enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") can be used in all reading positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types c or string.
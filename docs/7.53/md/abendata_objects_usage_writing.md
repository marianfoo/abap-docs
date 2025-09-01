  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Writer Positions

In a writer position, the content of the operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows in writer positions:

-   A [visible data object](javascript:call_link\('abenlifetime_and_visibility.htm'\)) specified in this place using a name dobj, a field symbol <fs>, or a dereferenced data reference dref->\* (if dref is typed in full). Like in [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"), \[\] can be appended in internal tables, to address the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").

-   A [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like or byte-like data object specified using an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"). An offset or length cannot be specified in writing positions for data objects of the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types string and xstring.

-   In a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"), an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry").

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

Writer-only positions, where an operand is overwritten without being read, and writer positions where an operand is read and written are both available.

Notes

-   In [some writing positions](javascript:call_link\('abenexpression_positions_write.htm'\)), certain expressions can also be specified.

-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") can only be used in writing positions in which the operand type is the enumerated type and only the associated [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") can be written.
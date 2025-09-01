  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Syntax Cleanup in Release 7.0

For Release 7.0, the ABAP syntax has been cleaned up. Incorrect language constructs, which previously only led to syntax warnings, now cause syntax errors. The profile parameter abap/warn2error\_release can be used to control whether the new syntax errors continue to be reported as syntax warnings.

The following tables show the situations that lead to syntax errors as of Release 7.0. An "X" in the final column of the table indicates that the syntax in question already led to a syntax error in classes before Release 7.0.

Errors in Language Construct

Program Layout

Statement cannot be reached.

X

Missing forward declaration of a class using [CLASS - DEFERRED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_deferred.htm).

\-

Declarations

Program-internal [name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) with more than 30 characters.

X

Special characters in a program-internal [name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) in obsolete ABAP (non-Unicode).

X

Single digit as the name of a data object.

X

Incorrect [namespace prefix](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm).

X

Operational statement within the definition of a [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_glosry.htm "Glossary Entry") with BEGIN OF ... END OF.

X

Reference to a data type of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") in a public [parameter interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenparameter_interface_glosry.htm "Glossary Entry")

X

Reference to a data type of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") in the declaration of a public attribute of a global class

\-

Incompatible or non-convertible value specified after DEFAULT for a [formal parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry").

\-

An interface parameter of a function module, which has been defined both as input and output parameter, was declared with different or generic types.

\-

A type of a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") has the same name as an existing type in ABAP Dictionary.

\-

A constant in a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") has the same name as an existing [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") or table in ABAP Dictionary.

\-

A [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry") in a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") does not have the name of the type group as a prefix.

A reserved component name such as the [pseudo component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line is used in a structure in ABAP Dictionary.

X

Internal table with the predefined name [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm).

\-

ABAP Objects

Unknown global class or interface after [GLOBAL FRIENDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm).

\-

IMPORTING, CHANGING, or RECEIVING specified in dynamic [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_explicit.htm).

\-

Missing call of the [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

[Instance component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_component_glosry.htm "Glossary Entry") accessed before the call of the [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

Short form [static\_meth( a )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm) with a non-unique assignment to a formal parameter.

\-

[Fixture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixture_glosry.htm "Glossary Entry") method in [test class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry") is not private.

\-

Selector \->> used instead of the [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") \-> when calling interface methods.

\-

Operators and Additions

Invalid one-character operator in a [comparison expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_expression_glosry.htm "Glossary Entry"), which has temporarily been interpreted as an abbreviation, for example, as E for EQ.

\-

AND or OR at the end of a [logical expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") not followed by a logical expression.

\-

More than one LENGTH addition after [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_field.htm).

\-

Addition SORTED BY specified after [COLLECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm).

X

Addition LANGUAGE specified after [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm) for OLE.

X

Additions AND SKIP FIRST SCREEN and USING both specified after [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm).

X

Addition OBJECT missing after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm).

\-

More than ten FIELD additions after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm).

\-

Operand Positions

Operand cannot be converted in assignment.

\-

Operand that cannot be converted to a number at a numeric operand position (for example, after [DECIMALS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) for ASSIGN).

\-

Length less than or equal to zero in the [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") for fields of fixed length.

X

Empty [offset/lengths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") specified.

X

Superfluous trailing blanks in [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning [text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning element of a bulleted list.

X

Invalid use of a [text symbol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm "Glossary Entry") as the target of a call.

\-

Internal table does not have the structure of a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [comparison expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") after [IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm).

X

sy-subrc assigned to a CHANGING, EXPORTING, or RETURNING parameter.

X

Data object passed to a formal parameter typed using STRUCTURE in a program of ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry"), where the [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") does not match completely.

\-

Data object specified whose name contains an address specification such as an [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), without an explicit assignment to a parameter when using [EXPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm), [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_parameterlist.htm), or [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm).

X

Internal Tables

[Table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_type_glosry.htm "Glossary Entry") defined for a [hashed table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") without specifying UNIQUE before [KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_keydef.htm).

\-

Non-[index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry") specified after [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm).

X

Incompatible work area for group level processing using internal tables with [AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_itab.htm) and [SUM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum.htm).

X

Component of a structured field symbol specified as a sort criterion after [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm).

Database Accesses

Columns of type STRING or RAWSTRING in [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm), [grouping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm), [sort keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) of [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm).

\-

Projection view accessed in connection with a correlated [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry").

Too many [subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry") in a SELECT statement.

\-

Work area or rows of an internal table are shorter than the structure of the database table when specifying the rows in [DELETE dbtab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_source.htm).

\-

[Indicator variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm) in [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry"), which is not of the external type INT2.

\-

List Statements

Dynamic position specification in [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapuline.htm) without AT.

X

Negative length len specified after [WRITE AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm).

\-

Write-protected data object specified after [HIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphide.htm).

X

Note

Programs that so far have used the language constructions stated above must now be considered as incorrect. If the respective positions in the program have been executed, runtime errors or undefined states occurred. The current syntax cleanup is intended to avoid error situations like the ones described here, when they can be recognized statically in advance.
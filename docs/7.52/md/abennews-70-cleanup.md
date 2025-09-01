  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Syntax Cleanup in Release 7.0

For Release 7.0, the ABAP syntax has been cleaned up. Errors in language constructs that previously produced only syntax warnings, now cause syntax errors. The profile parameter abap/warn2error\_release can be used to control whether the new syntax errors continue to be reported as syntax warnings.

The following tables show the situations that produce syntax errors from Release 7.0. An "X" in the final column of the table indicates that the syntax in question already produced a syntax error in classes before Release 7.0.

Error in Language Construct

Program Layout

Statement cannot be reached.

X

Missing forward declaration of a class using [CLASS - DEFERRED](javascript:call_link\('abapclass_deferred.htm'\)).

\-

Declarations

Program-internal [name](javascript:call_link\('abennaming_conventions.htm'\)) with more than 30 characters.

X

Special characters in a program-internal [name](javascript:call_link\('abennaming_conventions.htm'\)) in obsolete ABAP (non-Unicode).

X

Single digit as the name of a data object.

X

Incorrect [namespace prefix](javascript:call_link\('abennaming_conventions.htm'\)).

X

Operational statement within the definition of a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") with BEGIN OF ... END OF.

X

Reference to a data type of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") in a public [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry")

X

Reference to a data type of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") in the declaration of a public attribute of a global class

\-

Incompatible or non-convertible value specified after DEFAULT for a [formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry").

\-

An interface parameter of a function module, which has been defined both as input and output parameter, was declared with different or generic types.

\-

A type of a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") has the same name as an existing type in ABAP Dictionary.

\-

A constant in a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") has the same name as an existing [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") or table in ABAP Dictionary.

\-

A [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") in a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") does not have the name of the type group as a prefix.

A reserved component name such as the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line is used in a structure in ABAP Dictionary.

X

Internal table with the predefined name [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)).

\-

ABAP Objects

Unknown global class or interface after [GLOBAL FRIENDS](javascript:call_link\('abapclass_options.htm'\)).

\-

IMPORTING, CHANGING, or RECEIVING specified in dynamic [CREATE OBJECT](javascript:call_link\('abapcreate_object_explicit.htm'\)).

\-

Missing call of the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry") in the instance constructor of a [subclass](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry").

\-

[Instance component](javascript:call_link\('abeninstance_component_glosry.htm'\) "Glossary Entry") accessed before the call of the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry") in the instance constructor of a [subclass](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry").

\-

Short form [static\_meth( a )](javascript:call_link\('abapcall_method_static_short.htm'\)) with a non-unique assignment to a formal parameter.

\-

[Fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") method in [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") is not private.

\-

Selector \->> used instead of the [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") \-> when calling interface methods.

\-

Operators and Additions

Invalid one-character operator in a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry"), which has temporarily been interpreted as an abbreviation, for example, as E for EQ.

\-

AND or OR at the end of a [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") not followed by a logical expression.

\-

More than one LENGTH addition after [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)).

\-

Addition SORTED BY specified after [COLLECT](javascript:call_link\('abapcollect.htm'\)).

X

Addition LANGUAGE specified after [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for OLE.

X

Additions AND SKIP FIRST SCREEN and USING both specified after [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)).

X

Addition OBJECT missing after [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

\-

More than ten FIELD additions after [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

\-

Operand Positions

Operand cannot be converted in assignment.

\-

Operand that cannot be converted to a number at a numeric operand position (for example, after [DECIMALS](javascript:call_link\('abapassign_casting.htm'\)) for ASSIGN).

\-

Length less than or equal to zero in the [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") for fields of fixed length.

X

Empty [offset/lengths](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") specified.

X

Superfluous trailing blanks in [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry").

X

Line-spanning [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry").

X

Line-spanning element of a bulleted list.

X

Invalid use of a [text symbol](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") as the target of a call.

\-

Internal table does not have the structure of a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") in a [comparison expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") after [IN](javascript:call_link\('abenlogexp_select_option.htm'\)).

X

sy-subrc assigned to a CHANGING, EXPORTING, or RETURNING parameter.

X

Data object passed to a formal parameter typed using STRUCTURE in a program of ABAP language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"), where the [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") does not match completely.

\-

Data object specified whose name contains an address specification such as an [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") or an [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"), without an explicit assignment to a parameter when using [EXPORT](javascript:call_link\('abapexport_data_cluster_param.htm'\)), [IMPORT](javascript:call_link\('abapimport_parameterlist.htm'\)), or [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)).

X

Internal Tables

[Table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined for a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") without specifying UNIQUE before [KEY](javascript:call_link\('abaptypes_keydef.htm'\)).

\-

Non-[index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") specified after [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

X

Incompatible work area for control level processing using internal tables with [AT](javascript:call_link\('abapat_itab.htm'\)) and [SUM](javascript:call_link\('abapsum.htm'\)).

X

Component of a structured field symbol specified as a sort criterion after [SORT](javascript:call_link\('abapsort_itab.htm'\)).

Database Accesses

Columns of type STRING or RAWSTRING in [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)), [grouping](javascript:call_link\('abapgroupby_clause.htm'\)), [sort keys](javascript:call_link\('abaporderby_clause.htm'\)) of [SELECT](javascript:call_link\('abapselect.htm'\)).

\-

Projection view accessed in connection with a correlated [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").

Too many [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in a SELECT statement.

\-

Work area or rows of an internal table are shorter than the structure of the database table when specifying the rows in [DELETE dbtab](javascript:call_link\('abapdelete_source.htm'\)).

\-

[Indicator variable](javascript:call_link\('abapexec_host.htm'\)) in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), which is not of the external type INT2.

\-

List Statements

Dynamic position specification in [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [ULINE](javascript:call_link\('abapuline.htm'\)) without AT.

X

Negative length specification len after [WRITE AT](javascript:call_link\('abapwrite-.htm'\)).

\-

Write-protected data object specified after [HIDE](javascript:call_link\('abaphide.htm'\)).

X

Note

Programs that so far have used the language constructions stated above must now be considered as incorrect. If the respective positions in the program have been executed, runtime errors or undefined states occurred. The current syntax cleanup is intended to avoid error situations like the ones described here, when they are known statically in advance.
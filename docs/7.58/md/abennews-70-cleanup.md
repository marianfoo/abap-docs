  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Syntax%20Cleanup%20in%20ABAP%20Release%207.0%2C%20ABENNEWS-70-CLEANUP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

ABAP Syntax Cleanup in ABAP Release 7.0

For ABAP release 7.0, the ABAP syntax has been cleaned up. Incorrect language constructs, which previously only led to syntax warnings, now cause syntax errors. The profile parameter abap/warn2error\_release can be used to control whether the new syntax errors continue to be reported as syntax warnings.

The following tables show the situations that lead to syntax errors as of ABAP release 7.0. An X in the final column of the table indicates that the syntax in question already led to a syntax error in classes before ABAP release 7.0.

Errors in Language Construct

Program Structure

Statement cannot be reached.

X

Missing forward declaration of a class using [CLASS - DEFERRED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred.htm).

\-

Declarations

Program-internal [name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) with more than 30 characters.

X

Special characters in a program-internal [name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) in obsolete ABAP (non-Unicode).

X

Single digit as the name of a data object.

X

Incorrect [namespace prefix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm).

X

Operational statement within the definition of a [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") with BEGIN OF ... END OF.

X

Reference to a data type of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") in a public [parameter interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparameter_interface_glosry.htm "Glossary Entry")

X

Reference to a data type of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") in the declaration of a public attribute of a global class

\-

Incompatible or non-convertible value specified after DEFAULT for a [formal parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformal_parameter_glosry.htm "Glossary Entry").

\-

An interface parameter of a function module, which has been defined both as input and output parameter, was declared with different or generic types.

\-

A type of a [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") has the same name as an existing type in ABAP Dictionary.

\-

A constant in a [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") has the same name as an existing [flat structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_structure_glosry.htm "Glossary Entry") or table in ABAP Dictionary.

\-

A [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry") in a [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") does not have the name of the type pool as a prefix.

A reserved component name such as the [pseudo component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line is used in a DDIC structure.

X

Internal table with the predefined name [screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_structure_obsolete.htm).

\-

ABAP Objects

Unknown global class or interface after [GLOBAL FRIENDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm).

\-

IMPORTING, CHANGING, or RECEIVING specified in dynamic [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_explicit.htm).

\-

Missing call of the [instance constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

[Instance component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_component_glosry.htm "Glossary Entry") accessed before the call of the [instance constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

Short form [meth( a )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm) with a non-unique assignment to a formal parameter.

\-

[Fixture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixture_glosry.htm "Glossary Entry") method in [test class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_class_glosry.htm "Glossary Entry") is not private.

\-

Operators and Additions

Invalid one-character operator in a [comparison expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomparison_expression_glosry.htm "Glossary Entry"), which has temporarily been interpreted as an abbreviation, for example, as E for EQ.

\-

AND or OR at the end of a [logical expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_expression_glosry.htm "Glossary Entry") not followed by a logical expression.

\-

More than one LENGTH addition after [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm).

\-

Addition SORTED BY specified after [COLLECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcollect.htm).

X

Addition LANGUAGE specified after [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm) for OLE.

X

Additions AND SKIP FIRST SCREEN and USING both specified after [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction.htm).

X

Addition OBJECT missing after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm).

\-

More than ten FIELD additions after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm).

\-

Operand Positions

Operand cannot be converted in assignment.

\-

Operand that cannot be converted to a number at a numeric operand position (for example, after [DECIMALS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) for ASSIGN).

\-

Length less than or equal to zero in the [offset/length specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") for fields of fixed length.

X

Empty [offset/lengths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") specified.

X

Superfluous trailing blanks in [text field literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning [text field literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning element of a bulleted list.

X

Invalid use of a [text symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_symbol_glosry.htm "Glossary Entry") as the target of a call.

\-

Internal table does not have the structure of a [ranges table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [comparison expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelational_expression_glosry.htm "Glossary Entry") after [IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_select_option.htm).

X

sy-subrc assigned to a CHANGING, EXPORTING, or RETURNING parameter.

X

Data object passed to a formal parameter typed using STRUCTURE in a program of ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry"), where the [fragment view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") does not match completely.

\-

Data object specified whose name contains an address specification such as an [instance component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), without an explicit assignment to a parameter when using [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm), [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm), or [CALL DIALOG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_dialog.htm).

X

Internal Tables

[Table type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_type_glosry.htm "Glossary Entry") defined for a [hashed table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry") without specifying UNIQUE before [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_keydef.htm).

\-

Non-[index table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry") specified after [SEARCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsearch_itab.htm).

X

Incompatible work area for group level processing using internal tables with [AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_itab.htm) and [SUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsum.htm).

X

Component of a structured field symbol specified as a sort criterion after [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm).

Database Accesses

Columns of type STRING or RAWSTRING in [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm), [grouping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm), [sort keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) of [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm).

\-

DDIC projection view accessed in connection with a correlated [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry").

Too many [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") in a SELECT statement.

\-

Work area or lines of an internal table are shorter than the structure of the database table when specifying the lines in [DELETE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_source.htm).

\-

[Indicator variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_host.htm) in [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry"), which is not of the external type INT2.

\-

List Statements

Dynamic position specification in [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm) without AT.

X

Negative length len specified after [WRITE AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm).

\-

Write-protected data object specified after [HIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphide.htm).

X

Hint

Programs that so far have used the language constructions stated above must now be considered as incorrect. If the respective positions in the program have been executed, runtime errors or undefined states occurred. The current syntax cleanup is intended to avoid error situations like the ones described here, when they are known statically in advance.
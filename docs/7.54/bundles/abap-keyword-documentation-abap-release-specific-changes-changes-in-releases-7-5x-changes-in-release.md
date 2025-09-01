# ABAP Keyword Documentation / ABAP - Release-Specific Changes / Changes in Releases 7.5x / Changes in Release 7.50

Included pages: 12


### abennews-750.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) → 

Changes in Release 7.50

The kernel release for Release 7.50 is 7.45.

-   [Only Unicode Systems in Release 7.50](javascript:call_link\('abennews-750-unicode.htm'\))
    
-   [Data Types and ABAP Dictionary in Release 7.50](javascript:call_link\('abennews-750-types.htm'\))
    
-   [Expressions and Functions in Release 7.50](javascript:call_link\('abennews-750-expressions.htm'\))
    
-   [Exception Classes in Release 7.50](javascript:call_link\('abennews-750-exceptions.htm'\))
    
-   [ABAP SQL in Release 7.50](javascript:call_link\('abennews-750-open_sql.htm'\))
    
-   [ABAP CDS in Release 7.50](javascript:call_link\('abennews-750-abap_cds.htm'\))
    
-   [AMDP in Release 7.50](javascript:call_link\('abennews-750-amdp.htm'\))
    
-   [ABAP Unit in Release 7.50](javascript:call_link\('abennews-750-abap_unit.htm'\))
    
-   [RFC and APC in Release 7.50](javascript:call_link\('abennews-750-rfc.htm'\))
    
-   [ABAP Versions in Release 7.50](javascript:call_link\('abennews-750-abap_versions.htm'\))
    
-   [RFC and APC in Release 7.50](javascript:call_link\('abennews-750-rfc.htm'\))
    
-   [Further Changes in Release 7.50](javascript:call_link\('abennews-750-others.htm'\))
    

Continue
[Only Unicode Systems in Release 7.50](javascript:call_link\('abennews-750-unicode.htm'\))
[Data Types and ABAP Dictionary in Release 7.50](javascript:call_link\('abennews-750-types.htm'\))
[Expressions and Functions in Release 7.50](javascript:call_link\('abennews-750-expressions.htm'\))
[Exception Classes in Release 7.50](javascript:call_link\('abennews-750-exceptions.htm'\))
[ABAP SQL in Release 7.50](javascript:call_link\('abennews-750-open_sql.htm'\))
[ABAP CDS in Release 7.50](javascript:call_link\('abennews-750-abap_cds.htm'\))
[AMDP in Release 7.50](javascript:call_link\('abennews-750-amdp.htm'\))
[ABAP Unit in Release 7.50](javascript:call_link\('abennews-750-abap_unit.htm'\))
[RFC and ABAP Channels in Release 7.50](javascript:call_link\('abennews-750-rfc.htm'\))
[ABAP Versions in Release 7.50](javascript:call_link\('abennews-750-abap_versions.htm'\))
[Further Changes in Release 7.50](javascript:call_link\('abennews-750-others.htm'\))


### abennews-750-unicode.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Only Unicode Systems in Release 7.50

From Release 7.50, AS ABAP can only run as a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). Systems with non-Unicode code pages are no longer supported. Therefore, all runnable ABAP programs have the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") or higher. Programs with the language version [Obsolete ABAP (Non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be executed. The syntax check can now only run using the rules from the [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). The [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) [Obsolete ABAP (Non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be used.


### abennews-750-types.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Data Types and ABAP Dictionary in Release 7.50

[1\. New built-in ABAP type int8](#!ABAP_MODIFICATION_1@1@)

[2\. Global temporary tables](#!ABAP_MODIFICATION_2@2@)

[3\. Replacement objects](#!ABAP_MODIFICATION_3@3@)

[4\. Value ranges of domains](#!ABAP_MODIFICATION_4@4@)

Modification 1

New Built-In ABAP Type int8

The new built-in data type [int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) enables 8-byte integers with signs to be declared.

-   The associated data type in ABAP Dictionary was introduced with the name [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)).
    
-   The [value range](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) of the new data type int8 is -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807.
    
-   Apart from the extended value range, the new data type int8 has the same properties as the existing data type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) for 4-byte integers, with the following exceptions:
    

-   The [alignment required](javascript:call_link\('abenalignment.htm'\)) for data objects of type int8 is an address divisible by 8.

-   The value of the [output length](javascript:call_link\('abenwrite_output_length.htm'\)) of data objects of type int8 is 20.

-   A new [calculation type](javascript:call_link\('abenarith_type.htm'\)) has been introduced for int8, situated between i and p in the hierarchy.
    

Modification 2

Global Temporary Tables

Database tables in ABAP Dictionary can be defined using the table category [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)). A global temporary table (GTT) can only be filled with temporary data during a database LUW. When a GTT is filled using ABAP SQL, it must be emptied again explicitly before the next implicit database commit. If not, a non-handleable exception is raised.

Modification 3

Replacement Objects

A CDS can be assigned as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) to a transparent database table or a classic database view. In ABAP SQL reads, the replacement object is then accessed instead of the original object.

Modification 4

Value Ranges of Domains

When the [value range of a domain](javascript:call_link\('abenddic_domains_sema.htm'\)) is defined, the data types INT1, INT2, and INT4 are now checked (like INT8) to determine whether the fixed values and interval boundaries are valid values, that is, that they lie within the [value range](javascript:call_link\('abenddic_builtin_types.htm'\)) defined by the technical attributes. Existing domains with invalid value ranges must be corrected.


### abennews-750-expressions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Expressions and Functions in Release 7.50

[1\. Predicate expression for type inspection](#!ABAP_MODIFICATION_1@1@)

[2\. Case distinction for type inspection](#!ABAP_MODIFICATION_2@2@)

[3\. Enhanced type interference in constructor expressions](#!ABAP_MODIFICATION_3@3@)

[4\. Object component selector after table expressions](#!ABAP_MODIFICATION_4@4@)

[5\. System class for dynamic mapping of structures](#!ABAP_MODIFICATION_5@5@)

Modification 1

Predicate Expression for Type Inspection

The new predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) can be used to detect the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). This makes it possible to check the feasibility of a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") before it is executed.

Modification 2

Case Distinction for Type Inspection

The special statement [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) makes it possible to check the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") as a case distinction.

Modification 3

Enhanced Type Interference in Constructor Expressions

If the character # is specified for the result type, enhancements were made for the following constructor expressions:

-   In the case of the constructor operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) an attempt is now made to evaluate the first declaration after INIT if the type of the operand position cannot be identified.
    
-   When the constructor expressions
    

-   [CONV #( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\))

-   [VALUE #( )](javascript:call_link\('abenvalue_constructor_params_init.htm'\))

-   [REDUCE #( ... )](javascript:call_link\('abenconstructor_expression_reduce.htm'\))

-   [COND #( ... )](javascript:call_link\('abenconditional_expression_cond.htm'\))

-   [SWITCH #( ... )](javascript:call_link\('abenconditional_expression_switch.htm'\))

are passed to generically typed formal parameters, no type could be derived for # from the operand position until now. From Release 7.50, a concrete type is derived for # for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.

Modification 4

Object Component Selector After Table Expressions

From Release 7.50, the [object component selector \->](javascript:call_link\('abentable_exp_chaining.htm'\)) can be specified directly after [table expressions](javascript:call_link\('abentable_expressions.htm'\)) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](javascript:call_link\('abentable_exp_result.htm'\)) is determined with the value operator VALUE.

Modification 5

System Class for Dynamic Mapping of Structures

The new system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) makes it possible to specify dynamic mapping rules for the component-by-component assignment of structures and internal tables.


### abennews-750-exceptions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Exception Classes in Release 7.50

[1\. New system interface for messages](#!ABAP_MODIFICATION_1@1@)

[2\. MESSAGE Addition for RAISE EXCEPTION and THROW](#!ABAP_MODIFICATION_2@2@)

Modification 1

New System Interface for Messages

The new system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) adds predefined attributes for the message type and the placeholders of the message to the interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)). IF\_T100\_DYN\_MSG makes it possible to [associate](javascript:call_link\('abenmessage_exceptions.htm'\)) any message with exception classes.

Modification 2

MESSAGE Addition for RAISE EXCEPTION and THROW

The new addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and of the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) associates any [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") with an exception object. The exception class in question must include the new system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)). It is also possible to use the addition with exception classes that include only the system interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)), but with restrictions.


### abennews-750-open_sql.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP SQL in Release 7.50

[1\. Arrangement of SELECT clauses and FROM clauses](#!ABAP_MODIFICATION_1@1@)

[2\. Unions](#!ABAP_MODIFICATION_2@2@)

[3\. Host expressions](#!ABAP_MODIFICATION_3@3@)

[4\. SQL expressions expanded](#!ABAP_MODIFICATION_4@4@)

[5\. SQL functions expanded](#!ABAP_MODIFICATION_5@5@)

[6\. ON conditions expanded](#!ABAP_MODIFICATION_6@6@)

[7\. Columns specified after BETWEEN](#!ABAP_MODIFICATION_7@7@)

[8\. Subquery as data source of INSERT](#!ABAP_MODIFICATION_8@8@)

[9\. Access to CDS entities](#!ABAP_MODIFICATION_9@9@)

[10\. Path expressions for associations of CDS views](#!ABAP_MODIFICATION_10@10@)

[11\. Access to global temporary tables](#!ABAP_MODIFICATION_11@11@)

[12\. Strict mode in the syntax check](#!ABAP_MODIFICATION_12@12@)

[13\. CDS views with input parameters](#!ABAP_MODIFICATION_13@13@)

[14\. System classes expanded](#!ABAP_MODIFICATION_14@14@)

[15\. Access to replacement objects](#!ABAP_MODIFICATION_15@15@)

Modification 1

Arrangement of SELECT Clauses and FROM Clauses

From Release 7.50, the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of a [SELECT statement](javascript:call_link\('abapselect.htm'\)) can also be specified in front of the [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)). In this case, the SELECT clause must be introduced using the new addition [FIELDS](javascript:call_link\('abapselect.htm'\)). This arrangement supports tools such as Code Completion in ABAP Editor.

Modification 2

Unions

From Release 7.50, the addition [UNION](javascript:call_link\('abapunion_clause.htm'\)) creates the union of the results sets of two [SELECT](javascript:call_link\('abapselect.htm'\)) statements.

Modification 3

Host Expressions

From Release 7.50, [host expressions](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the syntax @( expr ) can be specified in many operand positions in which [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) are possible. For expr, all ABAP expressions can calls are possible that can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Operand positions for host expressions in Release 7.50:

-   Arguments of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) and hence all operand positions in which these are possible.
    
-   Operand n after [UP TO](javascript:call_link\('abapselect_additions.htm'\)) and [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement,
    
-   Right sides of [WHERE](javascript:call_link\('abenwhere_logexp.htm'\)), [ON](javascript:call_link\('abapselect_join.htm'\)), or [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) conditions, except for LIKE and IN.
    
-   [Actual parameters](javascript:call_link\('abapselect_data_source.htm'\)) for input parameters of CDS views.
    
-   In the write statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), the work areas wa or the internal tables itab from which the data is taken.
    
-   Right side of a [SET expression](javascript:call_link\('abapupdate_set_expression.htm'\)) in UPDATE.
    

Modification 4

SQL Expressions Expanded

-   From Release 7.50, [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified in the following operand positions (except in the SELECT list):
    

-   Left side of any [WHERE](javascript:call_link\('abenwhere_logexp.htm'\)) condition

-   Left side of a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) condition

-   Left side of a [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\))

-   As an operand of a [cast expression](javascript:call_link\('abensql_cast.htm'\)).

-   In the SQL expression [CASE](javascript:call_link\('abensql_case.htm'\)), columns with the built-in dictionary type SSTRING can now be used.
    

If an SQL expression can be specified, any individual literals, host variables, and host expressions can also be specified.

Modification 5

SQL Functions Expanded

-   New Numeric Function
    

The new function [ROUND](javascript:call_link\('abensql_arith_func.htm'\)) rounds numeric values.

-   New String Functions
    

The new functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [LPAD](javascript:call_link\('abensql_string_func.htm'\)), [LENGTH](javascript:call_link\('abensql_string_func.htm'\)), [LTRIM](javascript:call_link\('abensql_string_func.htm'\)), [REPLACE](javascript:call_link\('abensql_string_func.htm'\)), [RIGHT](javascript:call_link\('abensql_string_func.htm'\)), [RTRIM](javascript:call_link\('abensql_string_func.htm'\)), and [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)) perform operations on strings.

-   Coalesce Function Expanded
    

The [coalesce function](javascript:call_link\('abensql_coalesce.htm'\)) can now have 255 arguments instead of just two and returns the value of the first argument that does not have the null value. Columns with the built-in dictionary type SSTRING can now be used as arguments.

Modification 6

ON Conditions Expanded

The following is possible from Release 7.50:

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") can be used on the left side of the [ON](javascript:call_link\('abapselect_join.htm'\)) condition of any join expression.
    
-   The expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) can be used in an [ON](javascript:call_link\('abapselect_join.htm'\)) condition of an outer join.
    
-   The full ON condition or subconditions of [joins](javascript:call_link\('abapselect_join.htm'\)) can be specified dynamically as [(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)). This is not possible if the full [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) is specified dynamically as (cond\_syntax).
    

Modification 7

Columns Specified After BETWEEN

From Release 7.50, numeric columns can be specified on the right side in an interval condition using [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)), providing the name of the database table or view is prefixed using ~.

Modification 8

Subquery as Data Source of INSERT

In the ABAP SQL write statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), a parenthesized [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) can now be specified as a data source after FROM. The rows of the results set of the subquery are inserted into the target table directly on the database. No data transport is required between the database and the application server.

Modification 9

Access to CDS entities

-   From Release 7.50, the restriction no longer applies that a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can only be used together with database tables and classic views in a [SELECT](javascript:call_link\('abapselect.htm'\)) statement if addressed using its [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). From Release 7.50, CDS views can be addressed using the name of their [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), even if associated with database tables or classic views using [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") or [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This makes accesses performed on a CDS using the CDS database view [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)).
    
-   From Release 7.50, the new [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can also be specified as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement alongside [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").
    
-   If an input parameter of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is annotated with the new annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), ABAP SQL can pass the system value that matches the value of the annotation implicitly. The annotation value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) even prevents an actual parameter from being passed to input parameters explicitly that are annotated in this way for client IDs.
    

Modification 10

Path Expressions for Associations of CDS Views

From Release 7.50, [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) can be specified in SELECT statements that access CDS views with associations published for outside use as follows.

-   Path expressions closed with an element can be specified as [columns](javascript:call_link\('abenopen_sql_columns.htm'\)).
    
-   Path expressions closed with a target data source can be used as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).
    

Modification 11

Access to Global Temporary Tables

When the new [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") in ABAP Dictionary are accessed using ABAP SQL, all temporary data stored here is guaranteed to be deleted before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"), If not, a runtime error occurs.

Modification 12

Strict Mode in the Syntax Check

If one the new features listed above (with the exception of dynamic join conditions) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 13

CDS Views with Input Parameters

In Release 7.50 and higher, the [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)). Querying this property results in a warning check from the syntax check.

Modification 14

System Classes Expanded

-   The class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can now be used to check all features of databases that can be integrated in ABAP programming but which cannot be used in all database systems.
    
-   The new system class CL\_DBI\_UTILITIES contains utility methods for the database interface. The documented method IS\_LOGGING\_ON can be used to verify whether [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is currently switched on for a database table.
    

Modification 15

Access to Replacement Objects

From Release 7.50, it is possible to define a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) in ABAP Dictionary (transaction SE11) for a database table or a database view.

If a replacement object is defined for a database table or database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the SELECT statement accesses the CDS view and not the database table or the database view.

This change was implemented using an internal tool a kernel patch after Release 7.40, SP10.


### abennews-750-abap_cds.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP CDS in Release 7.50

[1\. CDS table functions](#!ABAP_MODIFICATION_1@1@)

[2\. CDS access control](#!ABAP_MODIFICATION_2@2@)

[3\. Expressions and functions](#!ABAP_MODIFICATION_3@3@)

[4\. Session variables](#!ABAP_MODIFICATION_4@4@)

[5\. CDS views with input parameters](#!ABAP_MODIFICATION_5@5@)

[6\. Annotation for input parameters](#!ABAP_MODIFICATION_6@6@)

[7\. Key fields](#!ABAP_MODIFICATION_7@7@)

[8\. Evaluation of annotations](#!ABAP_MODIFICATION_8@8@)

[9\. Publishing associations](#!ABAP_MODIFICATION_9@9@)

[10\. Extensions](#!ABAP_MODIFICATION_10@10@)

Modification 1

CDS Table Functions

The new DDL statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) can be used to define [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as a new category of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). In platform-specific SQL, a CDS table function is implemented in an associated [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry").

Modification 2

CDS Access Control

[ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [access control](javascript:call_link\('abencds_authorizations.htm'\)), introduced in [Release 7.40, SP10](javascript:call_link\('abennews-740_sp10-abap_cds.htm'\)), was expanded to include implicit evaluations of [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [DCL](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) in ABAP SQL. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is associated with a CDS role, an additional [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

Modification 3

Expressions and Functions

The following enhancements have been implemented:

-   Enhancements to the [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):
    

-   A [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)) now now contain nested cast expressions and [case distinctions](javascript:call_link\('abencds_f1_case_expression.htm'\)) as an operand.

-   Data elements can now be specified as the target type in [CAST expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)). This passes its semantic attributes to the result. This also makes it possible to map more built-in types to itself than previously.

-   In [CAST expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)), the restriction no longer applies that casts of operands of the types DEC, CURR, and QUAN to the same types expect the target type to be long enough. In castes from NUMC to NUMC, however, the lengths must now match exactly.

-   [CAST expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)) can now be used to cast operands of the types DATS and TIMS to CHAR (if the length of the target type is sufficient).

-   A one character literal with the type NUMC can now be [compared](javascript:call_link\('abencds_cond_expr_types.htm'\)) with a data source of the type LANG.
    
-   New SQL functions for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):
    

-   String functions: [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [INSTR](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LEFT](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LENGTH](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LTRIM](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [RIGHT](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [RPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)),[RTRIM](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))

-   Byte string functions: [BINTOHEX](javascript:call_link\('abencds_f1_conv_func_types.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_f1_conv_func_types.htm'\))

-   Date functions and time functions for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):
    

-   The special date functions [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_f1_date_functions.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_f1_date_functions.htm'\)), and [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_f1_date_functions.htm'\)) make it possible to calculate with values of the built-in dictionary type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   The new date function [DATS\_IS\_VALID](javascript:call_link\('abencds_f1_date_functions.htm'\)) checks the validity of dates.

-   The new time function [TIMS\_IS\_VALID](javascript:call_link\('abencds_f1_time_functions.htm'\)) checks the validity of times.

-   The new time stamp functions [TSTMP\_IS\_VALID](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)) and [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)) perform operations with [time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) in packed numbers.

-   [Input parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a CDS view can be passed to many arguments of [built-in functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)).
    
-   In the [conversion functions](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) UNIT\_CONVERSION and DECIMAL\_SHIFT, the result type was set to the data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 31 and 14 decimal places.
    

Modification 4

Session Variables

When a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is accessed using ABAP SQL, three session variables ([$session.user](javascript:call_link\('abencds_f1_session_variable.htm'\)), [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)), and [$session.system\_language](javascript:call_link\('abencds_f1_session_variable.htm'\))) can be accessed here. In these variables, the values of the system fields sy-uname, sy-mandt and sy-langu are available.

Modification 5

CDS Views with Input Parameters

In Release 7.50 and higher, the [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)). Querying this property results in a warning check from the syntax check.

Modification 6

Annotation for Input Parameters

An [input parameter](javascript:call_link\('abencds_f1_param.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can now be annotated with an annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of this type is used a [data source](javascript:call_link\('abapselect_data_source.htm'\)) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) enables the client ID of the current client to be passed implicitly, which provides support for client handling in Native SQL of the implementation of a CDS table function.

Modification 7

Key Fields

-   The key fields of a CDS view that are defined with [KEY](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).
    
-   The new view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to override the default behavior of the addition [KEY](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    

Modification 8

Evaluation of Annotations

The class CL\_DD\_DDL\_ANNOTATION\_SERVICE contains methods for evaluating the [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Modification 9

Publishing Associations

Path expressions can now be published with more than one association in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a CDS view. The fields of the source data source from the ON condition of the published associated, which then also need to be specified, must be defined using an appropriately specified path.

Modification 10

Enhancements

The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) for [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") was expanded as follows:

-   [Associations](javascript:call_link\('abencds_f1_association.htm'\)) for the SELECT statement of the extended CDS view can now be specified after EXTEND VIEW.
    
-   The following can now be specified in the extension list select\_list\_extension:
    

-   [Input parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) of the extended CDS view

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) for custom associations and for associations of the extended CDS view

-   [Special functions](javascript:call_link\('abencds_special_functions.htm'\))


### abennews-750-amdp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

AMDP in Release 7.50

[1\. AMDP functions](#!ABAP_MODIFICATION_1@1@)

[2\. AMDP functions for AMDP methods](#!ABAP_MODIFICATION_2@2@)

[3\. AMDP functions for CDS table functions](#!ABAP_MODIFICATION_3@3@)

Modification 1

AMDP Functions

Alongside the existing [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry"), the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") framework now also supports [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") in the form of [table functions](javascript:call_link\('abentable_function_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). AMDP now have the new addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD in implementations of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry"). These methods are known as [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") to distinguish them from the existing [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"). Unlike AMDP procedure implementations, AMDP function implementations have a tabular return value, but cannot be called like regular [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") in ABAP.

Modification 2

AMDP Functions for AMDP Methods

In other [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") and using the associated Native SQL syntax, it is possible to access the [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") of an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") with an explicitly defined parameter interface

Modification 3

AMDP Functions for CDS Table Functions

An [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") in whose declaration the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)) is specified implements a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") from [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The parameter interface of an AMDP function implementation of this type is specified by the definition of the CDS table function. The associated [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") is executed as a data source of an ABAP SQL read statement when accessing the CDS table function directly or indirectly.


### abennews-750-abap_unit.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP Unit in Release 7.50

[1\. Test seams and injections](#!ABAP_MODIFICATION_1@1@)

Modification 1

Test Seams and Injections

[Test seams](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") and [injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)) and [END-TEST-SEAM](javascript:call_link\('abapend-test-seam.htm'\)) as part of production code can be replaced by code from test classes wrapped by [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) and [END-TEST-INJECTION](javascript:call_link\('abapend-test-injection.htm'\)).

Test classes with injections must be created in [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). With the exception of test includes for class pools and function groups, no test includes can currently be created.


### abennews-750-rfc.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

RFC and ABAP Channels in Release 7.50

[1\. Dynamic destinations in RFC](#!ABAP_MODIFICATION_1@1@)

[2\. Point-to-point communication for AMC](#!ABAP_MODIFICATION_2@2@)

[3\. Enhancements for APC](#!ABAP_MODIFICATION_3@3@)

[4\. Forbidden accesses for APC](#!ABAP_MODIFICATION_4@4@)

Modification 1

Dynamic Destinations in RFC

The methods of the class CL\_DYNAMIC\_DESTINATION are used to manage dynamic [RFC destinations](javascript:call_link\('abenrfc_destination.htm'\)) in Release 7.50 and higher. In particular, the method CREATE\_RFC\_DESTINATION makes it possible to create a dynamic destination, which can be used in the current sessions for RFCs.

Modification 2

Point-to-Point Communication for AMC

Alongside the general publish-and-subscribe mechanism, a point-to-point communication option was introduced for the [ABAP messaging channels (AMC)](javascript:call_link\('abenamc.htm'\)). Here, a sender object addresses precisely one receiver session. The send action can be either synchronous or asynchronous. This is done using the new factory method CREATE\_MESSAGE\_PRODUCER\_BY\_ID of the class CL\_AMC\_CHANNEL\_MANAGER. The ID of a receiver session is provided by the method GET\_CONSUMER\_SESSION\_ID of the same class.

Modification 3

Enhancements for APC

The framework for [ABAP channels (APC)](javascript:call_link\('abenapc.htm'\)) was expanded as follows:

-   Alongside communication using the WebSocket protocol, communication using TCP sockets is now also possible.
    
-   An AS ABAP used as an APC server can now also stateful. Until now, only stateless servers were possible.
    
-   An AS ABAP as operate as an APC client.
    
-   Clients known as detached clients make it possible to open an APC connection to a stateless or stateful APC server and then detach it again immediately so that it can be accessed using attached clients.
    
-   A connection handle can be used to access existing APC connections across the entire system.
    
-   A non--blocking model was introduced for stateful APC applications.
    
-   The class CL\_APC\_TIMER\_MANAGER creates timer managers that can be accessed using the interface IF\_APC\_TIMER\_MANAGER. A timer manager makes it possible to start and stop a timer in stateful APC applications in which the statement WAIT is not allowed. The interface IF\_APC\_TIMER\_HANDLER is used to handle timer events.
    

See also the ABAP Channels documentation in SAP Help Portal.

Modification 4

Forbidden Accesses for APC

Up to now, any repeated attempts to bind a push channel to a bound messaging channel or any attempts to remove a nonexistent binding were ignored. From Release 7.50, both situations raise an exception.


### abennews-750-abap_versions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP Versions in Release 7.50

[1\. Expanded version ID](#!ABAP_MODIFICATION_1@1@)

[2\. Restricted ABAP for Key Users](#!ABAP_MODIFICATION_2@2@)

Modification 1

Expanded Version ID

Until now there were only two versions of ABAP programs, [Unicode programs](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") and the obsolete [non-Unicode programs](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). The versions were distinguished using an ID defined internally for each program in the column UCCHECK of the system table TRDIR. This ID is initial for non-Unicode programs and "X" for Unicode programs.

From Release 7.50, the meaning of the column UCCHECK in the database table TRDIR has been expanded to cover a general version ID. This new ID can have values for further [ABAP versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") other than the initial value and the value "X". From Release 7.50, the value "2" can be specified for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry").

These changes must be respected in all places where the column UCCHECK in the database table TRDIR is accessed implicitly or explicitly. This column is evaluated by the ABAP statements [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) and [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)). For this reason, the addition [UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\)) of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has been replaced by the universal addition VERSION and is now [obsolete](javascript:call_link\('abapinsert_report_obsolete.htm'\)).

Modification 2

Restricted ABAP for Key Users

In Release 7.50, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry") was introduced. This version is designed for enhancements in delivered [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") made by Key Users. The internal version ID in the column UCCHECK of the system table TRDIR is "2".


### abennews-750-others.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Further Changes in Release 7.50

[1\. Specifying the text environment in SUBMIT VIA JOB](#!ABAP_MODIFICATION_1@1@)

[2\. Results table in ADBC](#!ABAP_MODIFICATION_2@2@)

[3\. Short texts in ABAP Doc](#!ABAP_MODIFICATION_3@3@)

[4\. Full text search in the Web version of the ABAP keyword documentation](#!ABAP_MODIFICATION_4@4@)

Modification 1

Specifying the Text Environment in SUBMIT VIA JOB

The new addition LANGUAGE of the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)) makes it possible to set the [text environment](javascript:call_link\('abentext_environment.htm'\)) of the called program, which was previously only possible when using the function module JOB\_SUBMIT directly.

Modification 2

Results Table in ADBC

The method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT, used to access sets in [ADBC queries](javascript:call_link\('abenadbc_query.htm'\)), now accepts sorted and hashed tables as well as standard tables.

Modification 3

Short Texts in ABAP Doc

It is now possible to define short texts in [ABAP comments](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") and synchronize them with the short texts of methods and function modules in ABAP Workbench.

Modification 4

Full Text Search in the Web Version of the ABAP Keyword Documentation

Quotation marks (") can be placed around a search term in the input fields of the Web version of the ABAP keyword documentation to force a full text search. If there are no quotation marks, an index search is performed and a full text search is made only if the index search does not find any hits.

The full text search option has been available in the dialog box of the SAP GUI VERSION of the ABAP keyword documentation for some time now using radio buttons. From Release 7.50, SP02, this function can also be accessed using quotation marks (") to enter a search term in the documentation display input field.

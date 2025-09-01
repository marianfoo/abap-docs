  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

CLASS-METHODS - FOR TABLE FUNCTION

[Quick Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth FOR TABLE FUNCTION cds\_entity.

Effect

This statement declares the [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth as an [AMDP function implementation](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") that implements a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") cds\_entity as an [AMDP table function](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry"). This statement can only be specified in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of an [AMDP class](javascript:call_link\('abenamdp_classes.htm'\)) and not in an interface. The method must be implemented using the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD.

cds\_entity expects a CDS table function defined using the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). For this function, the current class and the method meth must be specified after the addition IMPLEMENTED BY METHOD.

No other additions are possible. The interface parameters in the AMDP function implementation are added to the CDS table function as follows:

-   Mandatory input parameters of the AMDP function implementation are generated from the [input parameters](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of the CDS table function. The names are copied and the ABAP types are derived from the dictionary types.
    
-   A return value of the type of a standard table with empty table key with the name result with a structured row type is generated from the [elements](javascript:call_link\('abencds_f1_return_list.htm'\)) of the CDS table function. The names of the components of the row type correspond with the names of the elements, and the data types are derived from their dictionary types.
    

Executable Example

[AMDP functions](javascript:call_link\('abenamdp_functions_abexa.htm'\))
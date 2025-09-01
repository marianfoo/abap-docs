  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

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
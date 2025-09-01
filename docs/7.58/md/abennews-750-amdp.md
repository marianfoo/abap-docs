  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-AMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP in ABAP Release 7.50

[1\. AMDP Table Functions](#!ABAP_MODIFICATION_1@1@)
[2\. AMDP Table Functions for AMDP Methods](#!ABAP_MODIFICATION_2@2@)
[3\. AMDP Table Functions for CDS Table Functions](#!ABAP_MODIFICATION_3@3@)

Modification 1   

AMDP Table Functions

Alongside the existing [AMDP procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"), the [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") framework now also supports [AMDP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") in the form of [table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_function_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"). AMDP now have the new addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the statement METHOD in implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") in [AMDP classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_class_glosry.htm "Glossary Entry"). These methods are known as [AMDP function implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") to distinguish them from the existing [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). Unlike AMDP procedure implementations, AMDP function implementations have a tabular return value, but cannot be called like regular [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") in ABAP.

Modification 2   

AMDP Table Functions for AMDP Methods

In other [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") and using the associated Native SQL syntax, it is possible to access the [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") of an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") with an explicitly defined parameter interface

Modification 3   

AMDP Table Functions for CDS Table Functions

An [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") in whose declaration the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_for_tabfunc.htm) is specified implements a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") from [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The parameter interface of an AMDP function implementation of this type is specified by the definition of the CDS table function. The associated [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") is executed as a data source of an ABAP SQL read statement when accessing the CDS table function directly or indirectly.
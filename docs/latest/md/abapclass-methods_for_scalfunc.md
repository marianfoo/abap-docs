  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20FOR%20SCALAR%20FUNCTION%2C%20ABAPCLASS-METHODS_FOR_SCALFUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CLASS-METHODS, FOR SCALAR FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth FOR SCALAR FUNCTION cds\_scalar\_func.

Effect

This statement declares the [static method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth as an [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") that implements a CDS scalar function cds\_scalar\_func as an [AMDP scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry"). This statement can only be specified in the [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of an [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_classes.htm) and not in an interface. The method must be implemented using the addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) of the statement METHOD.

cds\_scalar\_func expects a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") defined using the statement [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) in the [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"). This function must have a [CDS scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm) of type SQL and the current class as well as the method meth must be specified in the field AMDP Reference of the [CDS scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfi_glosry.htm "Glossary Entry").

No other additions are possible. The interface parameters of the AMDP function implementation are derived from the [CDS scalar function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfd_glosry.htm "Glossary Entry") as follows:

-   The input parameters of the CDS scalar function are generated as mandatory input parameters of the AMDP function implementation. The names are copied, and the ABAP types are derived from the specified types.
-   The return value of the CDS scalar function is generated as return value. It has the data type specified in the CDS scalar function definition. The name of this return variable is result. This name is not part of the method signature.

Client-handling has not yet been implemented for CDS scalar functions and therefore, only client-independent objects can be accessed in the AMDP method that implements the scalar function.
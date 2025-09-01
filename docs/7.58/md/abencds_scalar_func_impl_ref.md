---
title: "ABAP CDS - CDS Scalar Function Implementation Reference"
description: |
  A CDS scalar function implementation reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dsfi_glosry.htm 'Glossary Entry') is a CDS object(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm 'Glossary Entry') defined in a form-based tool
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_func_impl_ref.htm"
abapFile: "abencds_scalar_func_impl_ref.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abencds", "scalar", "func", "impl", "ref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20CDS%20Scalar%20Function%20Implementation%20Reference%2C%20ABENCDS_SCALAR_FUNC_IMPL_REF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion%20for%20improvement:)

ABAP CDS - CDS Scalar Function Implementation Reference

A [CDS scalar function implementation reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dsfi_glosry.htm "Glossary Entry") is a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") defined in a form-based tool in [ABAP Development Tool (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") that binds a [CDS scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") to an implementation in a specific runtime environment. A scalar function can have multiple scalar function implementation references, but not more than one per runtime environment.

The name of a scalar function implementation reference must be identical to the name of the scalar function definition and have a suffix that matches its implementation type. The suffix \_SQL is mandatory for the implementation type SQL and the suffix \_ANA is mandatory for the implementation type Analytical.

The following types of scalar function implementation references are currently available:

-   Analytical
    -   Binds the CDS scalar function in question to an analytical runtime environment, such as the [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ae_glosry.htm "Glossary Entry").
    -   The name of the scalar function implementation reference must have the suffix \_ANA.
    -   [Analytical scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry") can only be defined internally at SAP. Customers can use the SAP-delivered [analytical scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry"). For a complete list of SAP-delivered analytical scalar functions, see [ABAP CDS - Analytical Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_function.htm).
-   SQL
    -   Binds the CDS scalar function in question to an SQL environment.
    -   The name of the scalar function implementation must have the suffix \_SQL.
    -   [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") require an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry"). This AMDP function implementation is also specified in the scalar function implementation reference in the following format: ClassName\=>MethodName.
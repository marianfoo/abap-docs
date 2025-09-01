---
title: "CDS DDL - Conceptual Background, Analytical Query"
description: |
  This topic explains some of the conceptual background of analytical data models. -   Analytical Cube View(#abencds-measure-dimension-apv-1-------analytical-query---@ITOC@@ABENCDS_MEASURE_DIMENSION_APV_2) Analytical Cube View A CDS analytical projection view(https://help.sap.com/doc/abapdocu_757_
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_measure_dimension_apv.htm"
abapFile: "abencds_measure_dimension_apv.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "measure", "dimension", "apv"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_query_apv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - Conceptual Background, Analytical Query, ABENCDS_MEASURE_DIMENSION_APV, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - Conceptual Background, Analytical Query

This topic explains some of the conceptual background of analytical data models.

-   [Analytical Cube View](#abencds-measure-dimension-apv-1-------analytical-query---@ITOC@@ABENCDS_MEASURE_DIMENSION_APV_2)

Analytical Cube View   

A [CDS analytical projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") must always be based on an [analytical cube view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_cube_glosry.htm "Glossary Entry"). The fields of an analytical cube view are interpreted as [analytical measures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_measure_glosry.htm "Glossary Entry") and [analytical dimensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dimension_glosry.htm "Glossary Entry").

-   Analytical dimension:
    
    Field of an analytical cube view that describes a characteristic of the view's subject and that can be used for [grouping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v2.htm) or filtering. For example if a view describes a sales order, the following columns can be dimensions: customer, date, region. Dimensions can have a [foreign key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_glosry.htm "Glossary Entry") association with a dimension view.
    
    A dimension must have one of the following data types: [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [NUMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CLNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [SSTR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [RAW(16)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
    
-   Analytical measure:
    
    Field of an analytical cube view that contains measurable data. In other words, an analytical measure can be any element that contains quantifiable data that can be calculated and aggregated, for example, the total price of all sales order positions. The aggregation behavior is defined via the annotation [@Aggregation.default](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm). Measures can have a reference to a [unit key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") or [currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry"). The following data types are possible: [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DF16\_DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DF34\_DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DF16\_RAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
    

Analytical Query   

The fields of a CDS analytical projection view can be classified into the following categories:

-   [Analytical formula](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_formula_glosry.htm "Glossary Entry"):
    
    Field of a CDS analytical projection view that is added in the projection layer as a new field. A formula can be an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm), a [currency conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) using the built-in function [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm), a [unit conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) using the built-in function [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm), or a [formula-related case expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_apv.htm). The annotation Aggregation.default: #FORMULA is mandatory.
    
-   [Analytical selection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_selection_glosry.htm "Glossary Entry"):
    
    Field of a CDS analytical projection view that is newly added in the projection layer. A selection is defined by means of a [selection-related case expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_apv.htm), also called restricted measure.
    
-   Dimension: field of an analytical projection view that is defined as dimension in the underlying cube view.
-   Text fields and attributes relating to a dimension. Such fields are included via [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_apv.htm).
-   [CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), [CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"), [currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry") fields, and [unit key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") fields.
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Conceptual%20Background%2C%20Analytical%20Query%2C%20ABENCDS_MEASURE_DIMENSION_APV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - Conceptual Background, Analytical Query

This topic explains some of the conceptual background of analytical data models.

-   [Analytical Cube View and Analytical Dimension View](#abencds-measure-dimension-apv-1-------analytical-query---@ITOC@@ABENCDS_MEASURE_DIMENSION_APV_2)

Analytical Cube View and Analytical Dimension View   

The projected entity of a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry") must be an [analytical cube view](javascript:call_link\('abencds_analytical_cube_glosry.htm'\) "Glossary Entry") or an [analytical dimension view](javascript:call_link\('abencds_anal_dim_view_glosry.htm'\) "Glossary Entry"). The fields of an analytical cube view and an analytical dimension view are interpreted as [analytical measure fields](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry") and [analytical dimension fields](javascript:call_link\('abencds_dimension_glosry.htm'\) "Glossary Entry").

-   Analytical dimension field:
    
    Field that describes a characteristic or attribute and that can be used for [grouping](javascript:call_link\('abencds_group_by_v2.htm'\)) or filtering. For example if a view describes a sales order, the following columns can be dimension fields: customer, date, region. Dimension fields can have a [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") association with a dimension view or a text view as association target.
    
    A dimension field must have one of the following data types: [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [SSTR](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAW(16)](javascript:call_link\('abenddic_builtin_types.htm'\)), [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).
    
-   Analytical measure field:
    
    Field that contains measurable data. In other words, an analytical measure can be any element that contains quantifiable data that can be calculated and aggregated, for example, the total price of all sales order positions. The aggregation behavior is defined via the annotation [@Aggregation.default](javascript:call_link\('abencds_f1_element_annotation.htm'\)). Measures can have a reference to a [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") or [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry"). The following data types are possible: [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF16\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)).
    

Analytical Query   

The fields of a CDS analytical projection view can be classified into the following categories:

-   [Analytical formula](javascript:call_link\('abencds_formula_glosry.htm'\) "Glossary Entry"):
    
    Field of a CDS analytical projection view that is added in the projection layer as a new field. A formula can be an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), a [currency conversion](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)) using the built-in function [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), a [unit conversion](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)) using the built-in function [UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), or a [formula-related case expression](javascript:call_link\('abencds_case_expression_apv.htm'\)). The annotation Aggregation.default: #FORMULA is mandatory.
    
-   [Analytical selection](javascript:call_link\('abencds_selection_glosry.htm'\) "Glossary Entry"):
    
    Field of a CDS analytical projection view that is newly added in the projection layer. A selection is defined by means of a [selection-related case expression](javascript:call_link\('abencds_case_expression_apv.htm'\)), also called restricted measure.
    
-   Dimension field: field of an analytical projection view that is defined as dimension field in the underlying [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry").
-   Text fields and attributes relating to a dimension. Such fields are included via [path expressions](javascript:call_link\('abencds_path_expr_apv.htm'\)).
-   [CDS amount fields](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry"), [CDS quantity fields](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry"), [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") fields, and [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") fields.
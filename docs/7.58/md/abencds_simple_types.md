  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Simple%20Types%2C%20ABENCDS_SIMPLE_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Simple Types

A [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") is a [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") that defines an [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry"). CDS simple types are defined with the following special [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry") statement in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"):

-   [CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm)

CDS simple types can be used for typing in the following contexts:

-   In ABAP CDS, simple types can be used for typing of elements or parameters or in cast expressions. The methods of the class CL\_DD\_SOBJECT\_FACTORY handle CDS simple types and evaluate fields typed with reference to a simple type.
-   In ABAP, a simple type can be specified after the addition TYPE. The properties of the type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

When used for typing, simple types pass their metadata defined by [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry"). In addition, simple types can be nested, providing extended reuse capabilities compared to DDIC data elements and DDIC domains.

A [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") cannot be used as a data type in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). For example, it cannot be used to type [DDIC data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry") or [DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry").

Frameworks:

-   CDS types are specifically designed for the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry"). They support metadata for [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") and SAP Fiori-based scenarios.
-   CDS types are supported by analytical runtimes such as the [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ae_glosry.htm "Glossary Entry").
-   The [annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") of a CDS type can be [evaluated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Further Information

ABAP Data Models development guide, section about [CDS simple types](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/ad9e96b6630348378cde737cde66ffc9?version=sap_cross_product_abap).

Hint

CDS simple types are a successor of [DDIC domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") and [DDIC data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry"). They are mainly intended for use within frameworks such as the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry"). They support metadata for [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") and SAP Fiori-based scenarios.

-   There is, on the other hand, only rudimentary support for [SAP GUI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_gui_glosry.htm "Glossary Entry") and [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry").

Continue
[CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm)
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Enumerated%20Types%2C%20ABENCDS_ENUMERATION_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Enumerated Types

A [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") is a [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") that defines an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry"). CDS enumerated types are defined with the following [CDS TDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm "Glossary Entry") statement in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"):

-   [CDS TDL - DEFINE TYPE ENUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm)

CDS enumerated types are mainly used to check allowed values. They restrict the values that can be passed to CDS elements or CDS parameters, which are typed with an enumerated type.

-   In ABAP CDS, enumerated types can be used for typing of elements or parameters, in cast expressions, as operands in expressions, and in comparisons. The methods of the class CL\_DD\_SOBJECT\_FACTORY handle CDS enumerated types and evaluate fields typed with reference to an enumerated type.
-   In ABAP, a CDS enumerated type can be directly used for the typing of enumeration variables and its enumeration constants can be used as operands in read positions. Before the first usage in an ABAP program, an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") with the name of the CDS enumerated type is implicitly declared in the global context of the program. The enumerated constants of the CDS enumerated type are represented by the components of this structure in alphabetical order. From that point on, a CDS enumerated type can be used in exactly the same way as ABAP enumerated type with such an enumerated structure. For a complete description of the use of enumerated objects in ABAP, see the topic [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm).

A [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") cannot be used as a data type in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").

Frameworks:

-   [CDS user-defined types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") are designed specifically for the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry"). They support metadata for [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") and SAP Fiori-based scenarios.
-   CDS user-defined types are supported by analytical runtimes such as the [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ae_glosry.htm "Glossary Entry").
-   The [annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") of a CDS user-defined type can be [evaluated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Further Information

ABAP Data Models development guide, section on [CDS enumerated types](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/3a696faff43246cebba2309fb0842acb?version=sap_cross_product_abap).

Hints

-   Enumerated types are also available in the ABAP programming language. Enumerated types in ABAP are described in the following topics:
    -   [TYPES, BEGIN OF ENUM enum\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm)
    -   [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm)
-   CDS enumerated types are the successor of [DDIC domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") with [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry").
-   However, DDIC domains with fixed values are evaluated for the input help of dynpro fields and they are ignored in ABAP programs. CDS enumerated types, on the other hand, make enumerations globally available and reusable in different contexts.

Continue
[CDS TDL - DEFINE TYPE ENUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm)
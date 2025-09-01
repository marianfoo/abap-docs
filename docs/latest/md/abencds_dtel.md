---
title: "Syntax"
description: |
  ... data_element ... Effect A CDS simple type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm 'Glossary Entry') can be typed using a DDIC data element(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm 'Glos
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dtel.htm"
abapFile: "abencds_dtel.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "dtel"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_type.htm) →  [ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_types.htm) →  [CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Simple%20Type%2C%20data_element%2C%20ABENCDS_DTEL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - CDS Simple Type, data\_element

Syntax

... data\_element ...

Effect

A [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") can be typed using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") data\_element. data\_element can have any ABAP Dictionary type listed in the topic [ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_overview_builtin_types.htm). ABAP Dictionary types which are not listed there, such as abap.fltp, are not available for [CDS user-defined types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry").

The technical properties of a DDIC data element are inherited from the data element by the CDS simple type. This means that the data type, length, and decimal places are inherited.

The following semantic DDIC properties are also inherited from a data element to a CDS simple type:

-   [Conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry")
-   [Lowercase letters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)
-   [Change document](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

The DDIC properties are translated into annotation values of a simple type. The following table shows a mapping from a DDIC property to a CDS simple type annotation:

DDIC property

CDS simple type annotation

[Conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)

[AbapCatalog.typeSpec.conversionExit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

[Lowercase letters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)

[ObjectModel.upperCase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

[Flag for change document](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

[AbapCatalog.typeSpec.changeDocumentRelevant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

[Field label, Heading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

[EndUserText.heading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

[Field label, Medium](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

[EndUserText.label](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

[Short text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

[EndUserText.quickInfo](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)

Details about these properties can be found in the following documentation: [DDIC - Semantic Properties of Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm) and [DDIC - Semantic Properties of Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm).

The properties that are inherited from a DDIC type can be overridden in the CDS simple type if necessary.

Restrictions

-   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") are not inherited. Search helps can be defined in CDS simple types using the annotation Consumption.valueHelpDefinition.
-   The short label and long label of DDIC data elements have no corresponding annotation in CDS simple types. This information is not inherited.
-   The output length of a DDIC domain is not inherited. The output length is derived from the context, if necessary.

Example

The following example shows how annotations are inherited from DDIC objects to CDS simple types.

-   The DDIC domain DEMO\_BT\_INHERITANCE has the following properties:
    -   Data type CHAR1, length 1
    -   Output length 2
    -   Conversion exit ALV1
    -   It is not case sensitive, so all letters are converted to uppercase.
-   The DDIC data element DEMO\_BT\_INHERITANCE inherits the technical properties from the domain. Additionally, it specifies field labels.
-   The CDS simple type DEMO\_SIMPLE\_TYPE\_INHERITANCE is based on the data element DEMO\_BT\_INHERITANCE and inherits its properties and texts:
    
    define type demo\_simple\_type\_inheritance: demo\_bt\_inheritance;
    
-   The CDS view entity DEMO\_CDS\_BT uses the CDS simple type DEMO\_SIMPLE\_TYPE\_INHERITANCE for a cast expression. As a result, the field Char1Field inherits the properties and texts from the CDS simple type.
    
    @AccessControl.authorizationCheck: #NOT\_REQUIRED
    @EndUserText.label: 'CDS view entity, simple type'
    define root view entity DEMO\_CDS\_BT
      as select from demo\_ddic\_types
    {
      key id,
          int4,
          cast(char1 as demo\_simple\_type\_inheritance) as Char1Field
    }
    

The system class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the annotations of the field Char1Field.

DATA(o) = cl\_demo\_output=>new( ).
cl\_dd\_ddl\_annotation\_service=>get\_annos\_4\_element(
      EXPORTING
        entityname =    'DEMO\_CDS\_BT'
        elementname = 'Char1Field'
      IMPORTING
        annos      =    FINAL(annos) ).
    o->write( annos ).
    o->display( ).

Result: The CDS simple type inherits the technical settings from the DDIC data element, converts them to annotation values, and passes them on when it is used in a CDS view entity.

![Figure](bt.jpg)
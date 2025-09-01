  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Types%2C%20ABENC1_PROVIDER_RULES_CDS_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

C1 Contract Rules for Providing CDS Types

A provider of [CDS user-defined types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") must obey the following rules:

-   The data type must not be changed.
-   The length must not be changed.
-   The number of decimal places must not be changed.
-   The conversion exit must not be changed.
-   The setting for lowercase letters must not be changed.
-   The type of the user-defined type must not be changed. That means that a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") must not be changed into a [CDS enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_type_glosry.htm "Glossary Entry") and vice versa.

The following additional rules apply to CDS enumerated types:

-   The enumerated constants must not be deleted or renamed.
-   The enumerated values must not be changed.
-   If an enumerated type is defined with reference to another enumerated type, the underlying type must remain stable with regard to the enumerated constants and enumerated values.
    
    Example: DEFINE TYPE EnumTypeStack : EnumTypeBase
    
    If EnumTypeStack is released with the C1 contract, the enumerated constants of EnumTypeBase must remain stable.
    

The following changes are allowed for user-defined types that are released with the C1 contract:

-   If a CDS simple type is typed using a DDIC data element, the data element can be replaced as long as the data type, length, and number of decimal places remain stable.
-   Adding or removing annotations is allowed as long as the stability requirements mentioned above are not affected. For example:
    -   If a CDS simple type is typed using a data element with conversion exit or the Lowercase Letters property, the data element can be replaced by a simple type and the annotations AbapCatalog.typeSpec.conversionExit and ObjectModel.upperCase.
    -   If a CDS simple type is typed using another CDS simple type, the underlying simple type can be replaced by a DDIC data element and the annotations that are part of the semantic properties of the data element can be removed from the simple type. For example, the annotations AbapCatalog.typeSpec.conversionExit and ObjectModel.upperCase can be replaced by semantic properties of a data element.
-   Adding enumerated constants to a CDS enumerated type is allowed.
-   Changing the sequence of enumerated constants of a CDS enumerated type is allowed.
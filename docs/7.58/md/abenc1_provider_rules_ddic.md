  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Dictionary%20Objects%2C%20ABENC1_PROVIDER_RULES_DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

C1 Contract Rules for Providing Dictionary Objects

A provider of DDIC objects must obey the following rules:

-   [DDIC domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry")
    
    Changes to domains must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules_elem.htm). Furthermore, changes to the following [semantic properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_sema.htm) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion exit must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry")
    
    Changes to data elements must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules_elem.htm).
    
-   [DDIC table types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_table_type_glosry.htm "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structure_glosry.htm "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes to existing components are allowed for elementary components only and must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules_elem.htm).
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")
    
    The same rules apply to DDIC database tables as to DDIC structures.
    
-   [DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.
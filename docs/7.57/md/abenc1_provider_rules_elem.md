  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Elementary Data Types, ABENC1_PROVIDER_RULES_ELEM, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Elementary Data Types

Elementary data types can be released as follows:

-   In ABAP Dictionary and ABAP CDS based on [DDIC built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)
    -   Standalone as DDIC domains or data elements
    -   Component types of DDIC structures or database tables
    -   Element types of CDS entities
-   In ABAP language based on [built-in ABAP types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_complete.htm)
    -   Public types of global classes or interfaces
    -   Types of interface parameters of methods, events and function modules

A provider of an elementary type must obey the following rules:

-   The built-in data type must not be changed with the following exceptions:
    
    -   [DDIC built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) INT1, INT2, and INT4
    -   [built-in ABAP types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_complete.htm) b, s, and i
    
    Those may be replaced by an integer type with a larger value range.
    
-   The length must not be changed with the following exceptions:
    
    -   DDIC built-in data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP types c and p
    
    The length must not be decreased.
    
-   The number of [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") must not be changed with the following exceptions:
    
    -   DDIC built-in data types DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP type p
    
    The number of decimal places must not be decreased.
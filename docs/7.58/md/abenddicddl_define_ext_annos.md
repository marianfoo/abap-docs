---
title: "Syntax"
description: |
  @AbapCatalog.enhancement.fieldSuffix: 'suffix' @AbapCatalog.enhancement.quotaMaximumFields: integer @AbapCatalog.enhancement.quotaMaximumBytes: integer @AbapCatalog.enhancement.quotaShareCustomer: integer @AbapCatalog.enhancement.quotaSharePartner: integer Effect The following annotations are requir
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_ext_annos.htm"
abapFile: "abenddicddl_define_ext_annos.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "ext", "annos"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20ext_annos%2C%20ABENDDICDDL_DEFINE_EXT_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE STRUCTURE, ext\_annos

Syntax

@AbapCatalog.enhancement.fieldSuffix: 'suffix'
@AbapCatalog.enhancement.quotaMaximumFields: integer
@AbapCatalog.enhancement.quotaMaximumBytes: integer
@AbapCatalog.enhancement.quotaShareCustomer: integer
@AbapCatalog.enhancement.quotaSharePartner: integer

Effect

The following annotations are required for [C0 release of a DDIC structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm). They are evaluated only in the context of [C0 release](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry") for [developer extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendev_extensibility_glosry.htm "Glossary Entry").

-   @AbapCatalog.enhancement.fieldSuffix defines a 3-character element suffix suffix. This suffix is to be used for all fields of an extension created by customers or partners from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry"). The purpose is to avoid field naming clashes. The following rules apply:
    -   suffix must consist of exactly 3 alphabetical characters \[A-Z\].
    -   If the object is a partner or customer object, the suffix must begin with Y or Z.
    -   If the object is an SAP object, the suffix must not begin with Y or Z.
    -   Field suffixes should be unique. If the specified field suffix is already registered by a different development object, a syntax check warning occurs.
-   @AbapCatalog.enhancement.quotaMaximumFields defines the maximum number of fields that can be appended to the corresponding object by customers and partners. In other words, it reserves a field count for customer and partner extensions.
    
    The annotation value integer must be an integer between 0 and 1000. A value between 100 and 560 is recommended. Otherwise, a syntax check warning occurs.
    
    The sum of fields of the original object and reserved fields must not exceed the technical limitations of the object in question. Current technical limitations are:
    
    -   DDIC database table that is part of the software component SAP\_BASIS: 750 fields.
    -   DDIC database table, [storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm) Row Store: 1000 fields.
    -   DDIC database table, storage type Column Store: 1500 fields.
    -   DDIC structure: 9999 fields.
-   @AbapCatalog.enhancement.quotaMaximumBytes defines the maximum byte capacity that can be appended to the corresponding object by customers and partners. In other words, it reserves a byte capacity for customer and partner extensions. The annotation value integer must be an integer. The sum of bytes of the original object and reserved bytes must not exceed the technical limitation of 2 to the power of 19 minus 1 bytes (2^19-1). The recommended number of reserved bytes is between 1.000 and 56.000 bytes per structure.
-   @AbapCatalog.enhancement.quotaShareCustomer assigns a percentage of the defined field count and byte capacity to customer extensions. The annotation value integer can be an integer between 0 and 100. The customer quota share and the partner quota share must together add up to 100.
    
    Caution: Currently, a quota share of 50 is enforced.
    
-   @AbapCatalog.enhancement.quotaSharePartner assigns a percentage of the defined field count and byte capacity to partner extensions. The annotation value integer can be an integer between 0 and 100. The customer quota share and the partner quota share must together add up to 100.
    
    Caution: Currently, a quota share of 50 is enforced.
    

Further Information

[C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm)

Hints

-   The same annotations can also be specified in the definition of a DDIC database table using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table.htm) for C0 release of the database table in question.
-   Extensibility annotations of DDIC structures and DDIC database tables can only be maintained in [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). Maintenance in transaction SE11 is not supported.
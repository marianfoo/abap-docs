  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)

-   [Semantic attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special literals in [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)
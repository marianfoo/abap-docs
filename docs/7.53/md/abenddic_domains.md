  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](javascript:call_link\('abenddic_domains_tech.htm'\))

-   [Semantic attributes of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

Notes

-   Domains are located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be edited in form-based editors both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[Technical Attributes of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[Semantic Attributes of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))
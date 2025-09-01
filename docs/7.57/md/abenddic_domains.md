  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Domains, ABENDDIC_DOMAINS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

DDIC - Domains

A [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](javascript:call_link\('abenddic_domains_tech.htm'\))
-   [Semantic properties of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

The name of a domain must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties must be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") as well as the entire domain being used in data elements.
-   A domain determines properties of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[DDIC - Semantic Properties of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))
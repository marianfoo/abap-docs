  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Domains%2C%20ABENDDIC_DOMAINS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Domains

A [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](javascript:call_link\('abenddic_domains_tech.htm'\))
-   [Semantic properties of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

The name of a domain must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").
-   As of ABAP release 7.58, [ABAP Core Data Services](javascript:call_link\('abenabap_core_data_services_glosry.htm'\) "Glossary Entry") offer [CDS enumerated types](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") for defining [enumerated data types](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[DDIC - Semantic Properties of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))
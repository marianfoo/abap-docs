  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Data Elements

A [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") defines an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"). DDIC data elements describe the technical type properties and the semantic meaning of an object that is defined with reference to the data element. Data elements are the elementary components of complex types such as [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC table types](javascript:call_link\('abenddic_table_types.htm'\)), or [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)). An object which is declared program-internally with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in the ABAP Dictionary to ABAP types.

-   [Technical properties of data elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))
-   [Semantic properties of data elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))

Hints

-   [ABAP Core Data Services](javascript:call_link\('abenabap_core_data_services_glosry.htm'\) "Glossary Entry") offer [CDS simple types](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry") for defining [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") natively in ABAP CDS. CDS simple types can be enriched with semantic information using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). This semantic information is evaluated by frameworks such as the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") when a simple type is used for typing. Moreover, simple types can be nested within each other and therefore offer advanced reuse capabilities compared to DDIC data elements.
-   The technical properties of a data element can be defined either directly or by using a reusable [domain](javascript:call_link\('abenddic_domains.htm'\)). This is why the concept is known as a two-level domain concept.
-   The name of a data element must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)).
-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Technical Properties of Data Elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))
[DDIC - Semantic Properties of Data Elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))
[DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\))
# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenobsolete_typing.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_typing.htm)
- [abenlike_obsolete.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlike_obsolete.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.254Z

---

### abenobsolete_typing.htm

> **📖 Official SAP Documentation**: [abenobsolete_typing.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_typing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Type Reference, ABENOBSOLETE_TYPING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE, Obsolete](javascript:call_link\('abenlike_obsolete.htm'\))



**📖 Source**: [abenobsolete_typing.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_typing.htm)

### abenlike_obsolete.htm

> **📖 Official SAP Documentation**: [abenlike_obsolete.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlike_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenlike_obsolete.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlike_obsolete.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LIKE, Obsolete, ABENLIKE_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

LIKE, Obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to refer to [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structures in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following uses of LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.
-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))
-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object with the name dtype in a local context, then this object hides the data type from the ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.
-   It is neither possible to make a LIKE reference to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity, nor to make a LIKE reference to a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") ([obsolete](javascript:call_link\('abencds_access_obsolete.htm'\))).
-   For a reference to data types, the addition TYPE should always be used.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.

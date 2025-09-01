  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Extensions](javascript:call_link\('abenddic_enhancements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Customizing Includes, ABENDDIC_CUSTOMIZING_INCLUDES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. Customizing includes can be included in [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) and [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) delivered by SAP. The customizing includes in DDIC structures and DDIC database tables delivered by SAP are usually empty. They are not linked with existing structures and reserve only the names of the structures. In customer or partner systems, these includes can be extended as part of an [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) in customizing by creating the included customizing includes and using customizing transactions to give them components. Any existing transparent DDIC database tables are not transformed, which can put the fields in different orders in the dictionary and on the database.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its enhancement is then applied to all DDIC database tables or DDIC structures in which it is included. An empty customizing include of a DDIC database table or DDIC structure does not need to be enhanced.

Enhancements of a delivered DDIC structure or DDIC database table using a customizing include are not modifications. If a customizing include is used to add fields to a DDIC database table or DDIC structure in the standard system, these fields are inserted automatically in the new DDIC structure or DDIC database table delivered by SAP in an upgrade.
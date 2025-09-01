  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP10](javascript:call_link\('abennews-740_sp10.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.40, SP10, ABENNEWS-740_SP10-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.40, SP10

Modification

Access to Replacement Objects

In Release 7.40, SP10 and higher, it is possible to define a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) in ABAP Dictionary for a database table or a DDIC database view.

If a replacement object is defined for a database table or DDIC database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the SELECT statement accesses the CDS view and not the database table or the DDIC database view.

This change was implemented using a kernel patch after Release 7.40, SP10. A replacement object can only be defined using an internal tool. It is currently not possible to use transaction SE11 to define the replacement object. In Release 7.40, the definition of replacement objects is reserved for specific internal SAP developments and should be otherwise transparent.

From Release 7.61 onwards (but not in Release 7.60), it will be possible to explicitly define a replacement object in transaction SE11 and implicitly evaluate the object.
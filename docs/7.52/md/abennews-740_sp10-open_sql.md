  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP10](javascript:call_link\('abennews-740_sp10.htm'\)) → 

Open SQL in Release 7.40, SP10

[1\. Access to replacement objects](#!ABAP_MODIFICATION_1@1@)

Modification 1

Access to Replacement Objects

In Release 7.40, SP10 and higher, it is possible to define a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) in ABAP Dictionary for a database table or a database view.

If a replacement object is defined for a database table or database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the SELECT statement accesses the CDS view and not the database table or the database view.

This change was implemented using a kernel patch after Release 7.40, SP10. A replacement object can only be defined using an internal tool. It is currently not possible to use transaction SE11 to define the replacement object. In Release 7.40, the definition of replacement objects is reserved for specific SAP-internal developments and should be otherwise transparent.

From Release 7.50 onwards, it will be possible to define a replacement object explicitly in transaction SE11 and evaluate the object implicitly.
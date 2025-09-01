  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects in Release 7.53, ABENNEWS-753-SHARED_OBJECTS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects in Release 7.53

Modification

Cross-Server Invalidations and Releases

Until now, cross-server invalidations and releases of [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") were only possible for [transactional areas](javascript:call_link\('abenshm_area_basic_properties.htm'\)). From Release 7.53, cross-server invalidations and releases can be performed for all areas with the Application Server [area binding](javascript:call_link\('abenshm_area_fixed_properties.htm'\)) by using the associated parameter AFFECT\_SERVER of the methods INVALIDATE\_... and FREE\_... of the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") in question. The parameter AFFECT\_SERVER is added to the methods of existing area classes when a new generation is performed in transaction SHMA.
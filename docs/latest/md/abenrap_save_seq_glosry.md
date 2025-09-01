  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20save%20sequence%2C%20ABENRAP_SAVE_SEQ_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP save sequence

The RAP save sequence is part of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") runtime and is triggered after at least one successful modification was performed during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). It saves data from the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") on the database.

The RAP save sequence is divided into three phases that are entered in this order:

-   [RAP early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry")
-   [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry")
-   [RAP cleanup phase](javascript:call_link\('abenrap_cleanup_phase_glosry.htm'\) "Glossary Entry")
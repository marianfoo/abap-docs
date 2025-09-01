  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Structure Enhancements in Release 6.20

Since Release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using customizing includes or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). For example, if a character-type-only structure is enhanced, it can lose its character-type nature and hence its fragment view is changed.

In Release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).
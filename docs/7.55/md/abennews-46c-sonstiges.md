  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6C](javascript:call_link\('abennews-46c.htm'\)) → 

Further Changes in Release 4.6c

[1\. Scan buffer enhancement](#!ABAP_MODIFICATION_1@1@)
[2\. New functions for strings](#!ABAP_MODIFICATION_2@2@)
[3\. Greater precision in BCD arithmetic](#!ABAP_MODIFICATION_3@3@)
[4\. New comparison expression IS SUPPLIED](#!ABAP_MODIFICATION_4@4@)

Modification 1

Scan Buffer Enhancement

The scan buffer has been increased from 8 kB to 28 kB. Each ABAP statement can now contain a parameter list of this length. For example, a [WHERE](javascript:call_link\('abapwhere.htm'\)) clause can now contain 450 selection entries (instead of 100 as before) if variable names of 30 characters are used.

Modification 2

New Functions for Strings

The functions CHARLEN and NUMOFCHAR are now available for strings.

[CHARLEN](javascript:call_link\('abapcompute_arith.htm'\)) returns the length of the first character in a string or a character-like field. In single-byte code pages, this is always 1. In SAP-compatible multi-byte code pages, this can be either 1 or 2.

[NUMOFCHAR](javascript:call_link\('abapcompute_arith.htm'\)) returns the number of characters in a string or character-like field. In single-byte [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"), the behavior is the same as for the [STRLEN](javascript:call_link\('abapcompute_arith.htm'\)). In multi-byte code pages, characters occupying more than one byte are considered to have a length of 1.

Modification 3

Greater Precision in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") Arithmetic

BCD arithmetic for the data type P has been modified so that intermediate results are now calculated using 127 digits (instead of 63 as before). This change affects the internal representation only, since type P fields are still defined with a maximum of 16 bytes (or 31 digits).

Modification 4

New Comparison Expression IS SUPPLIED

The comparison expression [IS SUPPLIED](javascript:call_link\('abenlogexp_supplied.htm'\)) indicates whether an actual parameter is specified for an optional formal parameter of a method or function module. The new expression replaces the expression [IS REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\)), and renders it obsolete.